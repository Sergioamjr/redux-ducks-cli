'use strict';

var _require = require('./communs'),
    createFolder = _require.createFolder,
    createFile = _require.createFile,
    base = _require.base,
    logError = _require.logError;

var _require2 = require('./factory/'),
    reducer = _require2.reducer;

var createReducer = function createReducer() {
    return createFolder(base + '/reducers').then(function () {
        return createFile(base + '/reducers/index.js', reducer());
    }).catch(logError);
};

module.exports = {
    createReducer: createReducer
};