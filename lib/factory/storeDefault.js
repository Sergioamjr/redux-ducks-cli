"use strict";

var storeDefault = function storeDefault(store) {
  return "const DefaultStore = " + store + ";\n\nexport default DefaultStore;\n";
};

module.exports = storeDefault;