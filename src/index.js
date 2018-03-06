const { createReducer } = require('./reducers');
const { createStore } = require('./store');
const { createFolder, base, logError } = require('./communs');


// INIT
createFolder(base)
    .then(() => createReducer())
    .then(() => createStore())
    .catch(logError);
