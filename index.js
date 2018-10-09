const program = require("commander");
const fs = require("fs");
const _ = require('lodash');

program
    .version("0.0.1")
    .option("-k, --privateKey <privateKey>", "eth account private key")
    .option("-n, --ethPoint <ethPoint>", "eth point")
    .option("-h, --hostPoint <hostPoint>", "host point")
    .usage("-m -k privateKey -n ethPoint -h hostPoint")
    .parse(process.argv);

if (!program.privateKey || !program.ethPoint || !program.hostPoint) {
    console.error("Inputs are invalid %s, %s, %s", program.privateKey, program.ethPoint, program.hostPoint);
    program.help();
}

let configStr = "module.exports.ethPoint = '" + program.ethPoint + "';\n";
configStr += "module.exports.hostPoint = '" + program.hostPoint + "';\n";
configStr += "module.exports.privateKey = '" + program.privateKey + "';";
fs.writeFileSync('./app/lib/config.js', configStr);

require('egg').startCluster({
    baseDir: __dirname,
    port: process.env.PORT || 3000, // default to 7001
});