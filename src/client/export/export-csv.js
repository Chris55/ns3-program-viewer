import { BlobWriter, TextReader, ZipWriter } from "@zip.js/zip.js";
import FileSaver from "file-saver";

const eol = "\r\n";

const getFlatObject = (object) => {
    let path = "";

    const iter = (o, p) => {
        if (o && typeof o === "object") {
            Object.keys(o).forEach(function (k) {
                iter(o[k], p.concat(k));
            });
            return;
        }
        path += p.join(".") + "," + o + eol;
    };

    iter(object, []);
    return path;
};

export const buildExportCsv = async (data, callback, managerTitle) => {
    const blobWriter = new BlobWriter("application/zip");
    const writer = new ZipWriter(blobWriter);

    for (const [p, program] of data.entries()) {
        callback(`${((p + 1) * 100) / data.length} %`, 0, 1, p, data.length);

        const str = getFlatObject(program);
        const csv = "name,value" + eol + str + eol;

        const name = program.id.name.toString().replace(/:/g, "-");
        const filename = `${program.type}/${name} ${program.filename}.csv`;
        await writer.add(filename, new TextReader(csv));
    }
    await writer.close();

    const blob = await blobWriter.getData();
    FileSaver.saveAs(blob, `${managerTitle ?? "Nord"}.csv.zip`);
};
