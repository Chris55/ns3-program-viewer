const {loadNordFile} = require("../client/public/server/nord-service");
const fs = require('fs').promises;
const path = require('path');

const getNestedObject = (nestedObj, pathArr) => {
    const result =  pathArr.reduce((obj, key) => {
        if (obj && obj[key] !== 'undefined') {
            return obj[key];
        }
        throw new Error(pathArr.join('.') + ' is an invalid path or value is undefined !!!');
    }, nestedObj);
    if (typeof(result) !== "undefined") {
        return result;
    }
    throw new Error('something wrong with the api, actual value of ' + pathArr.join('.') + ' is undefined !!');
}

exports.loadTestCase = async (filename) => {

    // load Nord File
    const buffer = await fs.readFile(filename);
    const sut = loadNordFile(buffer, filename);

    // decode expression from filename

    let basename = path.basename(filename, path.extname(filename));
    basename = basename.replace(/@a/g, "/");
    basename = basename.replace("@=", "±")
    basename = basename.replace("@p", "+");
    basename = basename.replace("@c", ":");
    basename = basename.replace("@c", ":");

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
