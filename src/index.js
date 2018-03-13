const argv = require('yargs').argv;
const { createReducer } = require('./reducers');
const { createStore, createStateStore, removeStateStore } = require('./store');
const { createFolder, base, logError, logSuccess, createFile, getConfigFile } = require('./communs');
const { init, state, action, value, remove } = argv;

/* eslint-disable */
// console.log(init, state, action, value);
/* eslint-enable */

const starter = async () => {
    try {
        await createFolder(base);
        createFile(`${base}/reduxConfig.json`, '{}');
        createReducer();
        createStore();
        logSuccess();
    } catch(error) {
        logError(error);
    }
};

const addState = async () => {
    try {
        const file  = await getConfigFile();
        const fileParsed = await JSON.parse(file);
        createStateStore(state, action, value, fileParsed);
        logSuccess();
    } catch(error) {
        logError(error);
    }
};

const removeState = async (state) => {
    try {
        const file  = await getConfigFile();
        const fileParsed = await JSON.parse(file);
        removeStateStore(state, fileParsed);
    } catch(error) {
        logError(error);
    }
};

// INIT
if (init) {
    starter();
}

// CREATE STATE
if (state && !remove) {
    addState();
}

// REMOVE STATE
if(remove) {
    removeState(state);
}

// ADD ACTION

// REMOVE ACTION
