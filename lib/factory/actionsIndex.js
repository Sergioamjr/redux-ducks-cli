"use strict";

var actionsIndex = function actionsIndex(name) {
  return "export { default as " + name + " } from './" + name + "';\n";
};

module.exports = actionsIndex;