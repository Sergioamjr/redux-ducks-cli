const argv = require('yargs').argv;
const { createReducer } = require('./reducers');
const { createStore, createStateStore } = require('./store');
const { createFolder, base, logError, logSuccess, createConfig } = require('./communs');

const { init, state, action, value } = argv;

/* eslint-disable */
console.log(init, state, action, value);
/* eslint-enable */


// INIT
if (init) {
    createFolder(base)
        .then(() => createConfig(`${base}/reduxConfig.js`, '[]'))
        .then(() => createReducer())
        .then(() => createStore())
        .then(logSuccess)
        .catch(logError);
}

// ADD STATE
if (state) {
    createStateStore(state, action, value);
}
