
const { getOs } = require("./lib/detect.js");
const { existsOpenCommand } = require("./lib/open.js");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const os = getOs();

const run = async function({command}){
  const result = await existsOpenCommand({ os: os })
    .catch(function(err){
      console.log(err);
    });
  if(result){
    console.log("exitsts!!!");
  }else{
    console.log("not exitsts!");
  }
};

run({command: argv.cmd });