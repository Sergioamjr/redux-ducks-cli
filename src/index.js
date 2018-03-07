const argv = require('yargs').argv;
const { createReducer } = require('./reducers');
const { createStore, createStateStore } = require('./store');
const { createFolder, base, logError, logSuccess, createConfig, getConfigFile } = require('./communs');
const { init, state, action, value } = argv;

/* eslint-disable */
// console.log(init, state, action, value);
/* eslint-enable */


// INIT
if (init) {
    createFolder(base)
        .then(() => createConfig(`${base}/reduxConfig.json`, '{}'))
        .then(() => createReducer())
        .then(() => createStore())
        .then(logSuccess)
        .catch(logError);
}

// CREATE STATE
if (state) {
    getConfigFile()
        .then(data => JSON.parse(data))
        .then(config => createStateStore(state, action, value, config));
}

// REMOVE STATE

// ADD ACTION

// REMOVE ACTION
