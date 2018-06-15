"use strict";

var reducer = function reducer() {
  return "\nimport { combineReducers } from 'redux'\nimport * as reducers from './../store'\nconst rootReducer = combineReducers(reducers)\nexport default rootReducer\n";
};

module.exports = reducer;