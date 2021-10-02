import { renderToStaticMarkup } from "react-dom/server";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import NordDevice from "../nord/nord-device";
import { handy, isSafari } from "../utils/handy";
import { store } from "../features/store";
import { Provider } from "react-redux";

const getImages = async (data, showAll, callback) => {
    const images = [];

    for (let p = 0; p < data.length; p++) {
        callback(`rendering ${p + 1}/${data.length}`);
        const doc = (
            <Provider store={store}>
                <NordDevice data={[data[p]]} showAll={showAll} production={true} />
            </Provider>
        );

        const output = document.createElement("div");
        //output.style.cssText = 'z-index:-1';
        const staticElement = renderToStaticMarkup(doc);
        output.innerHTML = `<div>${staticElement}</div>`;
        const tag = document.getElementById("exportTag");
        tag.appendChild(output);

        const canvas = await html2canvas(output, {
            logging: false,
            useCORS: false,
            scale: 2,
            scrollX: 0,
            scrollY: -window.scrollY, // https://stackoverflow.com/questions/57936607/why-there-is-a-white-space-on-the-top-on-html2canvas
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.5);
        images.push(imgData);

        tag.removeChild(output);
    }

    return images;
};

export const buildExport = async (data, showAll, callback) => {
    // svg are not rendered by html2canvas in Safari
    // now working in v1.3.2, but still issues
    // https://github.com/niklasvh/html2canvas/issues/2699

    if (isSafari) throw Error("Safari not fully supported...., please use Chrome ;)");

    // workaround to disable the save button
    await handy(10);

    const images = await getImages(data, showAll, callback);

    // noinspection JSPotentiallyInvalidConstructorUsage
    const pdf = new jsPDF({
        orientation: "portrait", // landscape or portrait
        unit: "mm",
        format: "a4",
        compress: true,
    });

    for (let p = 0; p < images.length; p++) {
        callback(`saving ${p + 1}/${data.length}`);

        const imgData = images[p];

        const imgProps = pdf.getImageProperties(imgData);
        const margin = 0.1;
        const pdfWidth = pdf.internal.pageSize.width * (1 - margin);
        const pdfHeight = pdf.internal.pageSize.height * (1 - margin);
        const x = pdf.internal.pageSize.width * (margin / 2);
        const y = pdf.internal.pageSize.height * (margin / 2);
        const widthRatio = pdfWidth / imgProps.width;
        const heightRatio = pdfHeight / imgProps.height;
        const ratio = Math.min(widthRatio, heightRatio);
        const w = imgProps.width * ratio;
        const h = imgProps.height * ratio;

        if (p !== 0) {
            pdf.addPage();
        }

        pdf.addImage(imgData, "JPEG", x, y, w, h, undefined, "FAST");
    }

    const name = data.length === 1 ? data[0].name : "nord";
    pdf.save(name + ".pdf");
    return "";
};
