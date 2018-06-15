"use strict";

var exportDefault = function exportDefault(name) {
  return "export { default } from './" + name + ".js';\n";
};

module.exports = exportDefault;