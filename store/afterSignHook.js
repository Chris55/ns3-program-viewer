// See: https://medium.com/@TwitterArchiveEraser/notarize-electron-apps-7a5f988406db
//
// Signing an Electron app for Mac App Store
// https://www.techandstartup.org/tutorials/release-electron-app-on-mac-app-store
// https://epxx.co/artigos/electronsign.html
//
// Notarizing your Electron application
// https://kilianvalkhof.com/2019/electron/notarizing-your-electron-application/
//
// https://blog.mifi.no/2020/03/31/automated-electron-build-with-release-to-mac-app-store-microsoft-store-snapcraft/

// app store: https://appstoreconnect.apple.com
// certificates & profiles: https://developer.apple.com/account/resources/certificates/list

// generate a new app password: https://appleid.apple.com/account/manage
// add appleId & appleIdPassword env variables in ~/.bash-profile file
// export appleId=emailxxxx@xxx.com
// export appleIdPassword=xxxx-xxxx-xxxx-xxxx

// teamId is available here: https://developer.apple.com/account#MembershipDetailsCard
// export teamId=xxxxxx

const fs = require("fs");
const path = require("path");
const { notarize } = require("@electron/notarize");

module.exports = async function (params) {
    // Only notarize the app on macOS only.
    if (process.platform !== "darwin" || params.electronPlatformName !== "darwin") {
        return;
    }
    if (params.packager.platformSpecificBuildOptions.type === "development") {
        console.log("cancel notarize step for type", params.packager.platformSpecificBuildOptions.type);
        return;
    }

    //console.log("afterSign hook triggered", params)

    // Same appId in electron-builder.
    let appId = "com.chris55.nord-file-viewer";

    let appPath = path.join(params.appOutDir, `${params.packager.appInfo.productFilename}.app`);
    if (!fs.existsSync(appPath)) {
        throw new Error(`Cannot find application at: ${appPath}`);
    }

    console.log(`Notarizing ${appId} found at ${appPath}`);

    try {
        await notarize({
            appBundleId: appId,
            // tool: "notarytool",
            appPath: appPath,
            appleId: process.env.appleId,
            appleIdPassword: process.env.appleIdPassword,
            teamId: process.env.teamId,
        });
    } catch (error) {
        console.error(error);
    }

    console.log(`Done notarizing ${appId}`);
};
