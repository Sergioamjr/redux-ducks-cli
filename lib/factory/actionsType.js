"use strict";

var actionsType = function actionsType(name) {
  return "const " + name.toUpperCase() + " = '" + name.toUpperCase() + "';\n";
};

module.exports = actionsType;