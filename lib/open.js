const { spawnSync } = require('child_process');
const path = require("path");

const isError = function(res){

  if(res && res.name === "Error"){
    return true;
  }else if(res && res.error){
    return true;
  }else if(res && typeof res.toString === "function" && res.toString().match(/error/i)){
    return true;
  }
  return false;
};

const existsOpenCommand = function({os}){
  return new Promise(async function(resolve, reject){
    let res = null;
    let is_error = false;
    try{
      res = await spawnSync(os.checkcmd, [ os.openapp ]);
    }catch(e){
      is_error = true;
      res = e;
    }
    const string = String(res.output);
    console.log(string);
    if(is_error){
      return resolve(false);
    }else if(string.match(os.exists_regex)){
      return resolve(true);
    }else{
      return resolve(false);
    }

  });


};

const openDirectory = function({ dir, os, command }) {
  return new Promise(async function(resolve, reject){
    dir = dir || "";
    const p = path.resolve(dir);
    let res = null;
    let is_error = false;

    const cmd = command ? command : os.openapp;

    try{
      res = await spawnSync(cmd, [ p ]);
    }catch(e){
      is_error = true;
      res = e;
    }
    if(is_error || isError(res)){
      return reject(res);
    }else{
      const result = String(res.output);
      return resolve(result);
    }
  });
}

module.exports = {
  openDirectory: openDirectory,
  existsOpenCommand: existsOpenCommand
};
