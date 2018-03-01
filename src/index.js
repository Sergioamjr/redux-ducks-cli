const { createReducer } = require('./reducers');
const { createStore, addStore } = require('./store');
const { createFolder, base, logError } = require('./communs');


// INIT
createFolder(base)
    .then(() => createReducer())
    .then(() => createStore())
    .then(() => addStore())
    .catch(logError);
