const lineReader = require('line-reader');

lineReader.eachLine('./docs/ns3/program/00-mapping.md', (line, last) => {
    console.log(line);
});
