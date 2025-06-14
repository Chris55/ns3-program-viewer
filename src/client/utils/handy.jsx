export const handy = (ms) =>
    new Promise((resolve, _reject) => {
        setTimeout(function () {
            resolve(true);
        }, ms);
    });

const ua = window.navigator.userAgent;
const iOS = ua.match(/Macintosh/i) || ua.match(/iPad/i) || ua.match(/iPhone/i);
const webkit = ua.match(/WebKit/i);
export const isSafari =
    iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/EdgiOS/i) && !ua.match(/Chrome/i) && !ua.match(/Edg/i);

export const openUrl = async (url) => {
    const isElectron = /electron/i.test(navigator.userAgent);

    if (isElectron) {
        await window.electron.openExternal(url);
    } else {
        window.open(url);
    }
};
