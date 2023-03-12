const { getData } = require("../../src/server/common/file-utils");
//const homedir = require("os").homedir();

//const folder = homedir + "/downloads/";

const run = async () => {
    const ext = [".npo", ".nsmp", ".nsmp3", ".nsmp4"];

    for (let id = 0; id < 10000; id++) {
        try {
            const url = "https://www.norduserforum.com/download/file.php?id=" + id;
            const result = await getData(url);
            if (result.success) {
                const name = result.filename.toLowerCase();
                if (ext.some((x) => name.endsWith(x))) {
                    console.log(
                        `--> id: ${id} name: ${result.filename} size: ${result.data?.length} / ${result.contentLength}`
                    );
                } else {
                    // console.log(
                    //     `id: ${id} name: ${result.filename} size: ${result.data?.length} / ${result.contentLength}`
                    // );
                }
            } else {
                //console.log(`id: ${id} ${result.error}`);
            }
        } catch (err) {
            console.error(`id: ${id} error: ${err.message}`);
        }
    }
};

run();
