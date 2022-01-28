
const { getOs } = require("./lib/detect.js");
const { openDirectory } = require("./lib/open.js");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const os = getOs();

const run = async function({dir, command}){
  dir = dir || "./";
  const result = await openDirectory({ dir: dir, os: os, command: command })
    .catch(function(err){
      console.log(err);
    });

};

run({dir: argv.dir, command: argv.cmd });