"use strict";

var actionsImport = function actionsImport(name) {
  return "import Store from './../storeDefault.js';\nconst { " + name + " } = Store;\n\n";
};

module.exports = actionsImport;