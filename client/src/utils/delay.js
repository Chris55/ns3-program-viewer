export const delay = (ms) =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(true);
        }, ms);
    });
