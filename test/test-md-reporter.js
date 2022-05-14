const fs = require("fs");
const path = require("path");
//const { EOL } = require("os");
const { prettyName } = require("./test-helpers");

class MyMarkDownReporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunComplete(contexts, results) {
        const EOL = "  \n";
        const filename = this._options.filename || "./docs/test-result.md";
        let data = "";
        data += `${EOL}# ${results.numPassedTests}/${results.numTotalTests} tests passed${EOL}`;

        results.testResults.sort((a, b) =>
            a.testFilePath > b.testFilePath ? 1 : b.testFilePath > a.testFilePath ? -1 : 0
        );

        for (const suite of results.testResults) {
            let title = path.parse(suite.testFilePath).name;
            title = title.replace(/\./g, " ").toUpperCase();
            data += `## ${title}${EOL}`;
            data += `| status  | setting tested            | file |${EOL}`;
            data += `|:-------:|:--------------------------|------|${EOL}`;
            for (const test of suite.testResults) {
                let title = prettyName(path.parse(test.title).name) + "'";
                title = title.replace(/\seq\s/gi, " = '");
                title = title.replace(/\sand\s/gi, "' AND ");
                const file = test.title.replace(/\s/g, "%20");
                const url = "[" + path.parse(test.title).base + "](" + "../" + file + ")";
                data += `|${test.status === "passed" ? "✅" : "❌"}|${title}|${url}|${EOL}`;
            }
        }

        fs.writeFile(filename, data, function (err) {
            if (err) return console.log(err);
            console.log(`Test result saved in ${filename}`);
        });
    }
}

module.exports = MyMarkDownReporter;
