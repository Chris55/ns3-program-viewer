import {BlobWriter, TextReader, ZipWriter} from "@zip.js/zip.js";
import os from "os";
const FileSaver = require("file-saver");


const getFlatObject = (object) => {
    let path = "";

    const iter = (o, p) => {
        if (o && typeof o === "object") {
            Object.keys(o).forEach(function (k) {
                iter(o[k], p.concat(k));
            });
            return;
        }
        path += p.join(".") + "," + o + os.EOL;
    };

    iter(object, []);
    return path;
};

export const buildExportCsv = async (data, callback, managerTitle) => {
    const blobWriter = new BlobWriter("application/zip");
    const writer = new ZipWriter(blobWriter);

    for (const [p, program] of data.entries()) {

        callback(`${(p + 1) * 100 / data.length} %`, 0, 1, p, data.length);

        const str = getFlatObject(program);
        const csv = "name,value" + os.EOL + str + os.EOL;

        const filename = `${program.type}/${program.filename}.csv`;
        await writer.add(filename, new TextReader(csv));
    }
    await writer.close();

    const blob = await blobWriter.getData();
    FileSaver.saveAs(blob, `${managerTitle ?? "Nord"}.csv.zip`);
};
