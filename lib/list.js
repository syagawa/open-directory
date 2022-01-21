const list = [
  {
    regex: /windows/i,
    name: "windows",
    openapp: "explorer",
    checkcmd: "where",
    exists_regex: /windows.*explorer\.exe/i
  },
  {
    regex: /linux/i,
    name: "linux",
    openapp: "xdg-open",
    checkcmd: "which",
  },
  {
    regex: "",
    name: "etc",
    openapp: "",
  },
  {
    regex: "",
    name: "error1",
    openapp: "",
  },
  {
    regex: "",
    name: "error2",
    openapp: " ",
  },
];


module.exports = {
  list: list,
}
