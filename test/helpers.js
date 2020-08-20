const {loadNs3fFile} = require("../server/nord-service");
const fs = require('fs').promises;
const path = require('path');

const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

exports.getNs3Object = async (filename) => {

    // load Nord File
    const buffer = await fs.readFile(filename);
    const sut = loadNs3fFile(buffer);

    // decode expression from filename

    const basename = path.basename(filename, path.extname(filename));

    const ands = basename.split(' and ');
    const data = [];

    for(let and of ands) {
        const items = and.split(' eq ');
        const objs = items[0].split('.');
        const actual = getNestedObject(sut, objs);
        data.push({
            actual: actual.toString(),
            expected: items[1]
        })
    }

    return {
        sut: sut,
        data: data
    };
}
