const {zeroPad} = require("../../common/converter");

/***
 * returns NLA1 program location
 *
 * @param bankValue {number}
 * @param locationValue {number}
 * @returns {{bank: number, name: string, location: number, value: number}}
 */
exports.nla1ProgramLocation = (bankValue, locationValue) => {
    // bankValue should be between 0 and 7
    // locationValue should be between 0 and 49
    const valid = bankValue <= 7 && locationValue <= 49;
    const loc = locationValue + 1;
    return {
        bank: bankValue,
        location: locationValue,
        name: valid ? (bankValue + 1) + ":" + zeroPad(loc, 2) : "",
        value: bankValue * 50 + locationValue,
    };
};




/***
 * returns NLA1 Boolean obj
 *
 * @param rawValue
 * @param defaultValue
 * @returns {{midi: (number), isDefault: boolean, enabled}}
 */
exports.nla1BooleanValue = (rawValue, defaultValue) => {
    return {
        midi: rawValue ? 127 : 0,
        enabled: rawValue,
        isDefault: rawValue === defaultValue,
    };
};
