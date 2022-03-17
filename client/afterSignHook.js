// See: https://medium.com/@TwitterArchiveEraser/notarize-electron-apps-7a5f988406db
//
// Signing an Electron app for Mac App Store
// https://epxx.co/artigos/electronsign.html
//
// Notarizing your Electron application
// https://kilianvalkhof.com/2019/electron/notarizing-your-electron-application/
//
// https://blog.mifi.no/2020/03/31/automated-electron-build-with-release-to-mac-app-store-microsoft-store-snapcraft/

// app store: https://appstoreconnect.apple.com
// certificates & profiles: https://developer.apple.com/account/resources/certificates/list


const fs = require('fs');
const path = require('path');
const electron_notarize = require('electron-notarize');

module.exports = async function (params) {

    // Only notarize the app on Mac OS only.
    if (process.platform !== 'darwin' || params.electronPlatformName !== 'darwin') {
        return;
    }
    if (params.packager.platformSpecificBuildOptions.type === 'development') {
        console.log("cancel notarize step for type", params.packager.platformSpecificBuildOptions.type);
        return;
    }
    //console.log(params);
    //console.error("notarize is DISABLE FOR NOW");
    //return;

    //console.log('afterSign hook triggered', params);

    // Same appId in electron-builder.
    let appId = 'com.chris55.nord-file-viewer';

    let appPath = path.join(params.appOutDir, `${params.packager.appInfo.productFilename}.app`);
    if (!fs.existsSync(appPath)) {
        throw new Error(`Cannot find application at: ${appPath}`);
    }

    console.log(`Notarizing ${appId} found at ${appPath}`);

    try {
        console.log("USER", process.env.appleId, process.env.appleIdPassword);
        await electron_notarize.notarize({
            appBundleId: appId,
            appPath: appPath,
            appleId: process.env.appleId,
            appleIdPassword: process.env.appleIdPassword,
        });
    } catch (error) {
        console.error(error);
    }

    console.log(`Done notarizing ${appId}`);
};
