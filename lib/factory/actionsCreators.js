"use strict";

var createAction = function createAction(name) {
  return "\nexport function " + name + "(payload) {\n    return {\n      type: " + name.toUpperCase() + ",\n      payload\n    }\n  }\n";
};

module.exports = createAction;