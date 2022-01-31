
const { getOs } = require("./lib/detect.js");
const open = require("./lib/open.js");
const os = getOs();


const openDirectory = function({dir, command}){
  return open.openDirectory({ dir, dir, os: os, command: command});
};

const existsOpenCommand = function({command}){
  return open.existsOpenCommand({ os: os, command: command});
};

module.exports = {
  openDirectory: openDirectory,
  existsOpenCommand: existsOpenCommand
};