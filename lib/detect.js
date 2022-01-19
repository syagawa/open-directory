const os = require("os");
const { list } = require("./list.js");

const info = function(){
  return {
    arch:  os.arch(),
    platform:  os.platform(),
    release:  os.release(),
    type:  os.type(),
    userInfo:  os.userInfo(),
    version:  os.version(),
  }
};

const getOs = function(){
  const { type } = info();
  for(let i = 0; i < list.length; i++){
    const elm = list[i];
    const regex = elm.regex;
    const res = type.match(regex);
    if(res){
      return elm;
    }
  }
};


module.exports = {
  getOs: getOs,
}

