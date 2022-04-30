export const handy = (ms) =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(true);
        }, ms);
    });

export const isSafari =
    navigator.vendor &&
    navigator.vendor.indexOf("Apple") > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf("CriOS") === -1 &&
    navigator.userAgent.indexOf("FxiOS") === -1;

export const openUrl = async (url) => {
    const isElectron = /electron/i.test(navigator.userAgent);

    if (isElectron) {
        await window.electron.openExternal(url);
    } else {
        window.open(url);
    }
};
