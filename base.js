global.__base = __dirname;
global.rqr = function(path) {
  return require(require('path').join(__base + path));
};