const { createFolder, createFile, base, appendContent, logError } = require('./communs');
const { createAction, actionsType, actionsSwitch, actionsImport, actionsIndex, provider } = require('./factory');

const storeDefault = {
    hello: 'Hello World!'
};

const state = 'button';
const stateStore = 'UpdateButton';
const fileBaseIndex = `${base}/store/index.js`;
const fileBase = `${base}/store/${state}/${state}.js`;
const providerFile = `${base}/index.js`;

// Create Reducer
const createStore = () =>
    createFolder(`${base}/store`)
        .then(() => createFolder(`${base}/store/${state}`))
        .then(() => createFile(`${base}/store/storeDefault.json`, JSON.stringify(storeDefault)))
        .then(() => createFile(fileBaseIndex, '')
            .then(() => {
                appendContent(fileBaseIndex, actionsIndex(state));
            }))
        .then(() => createFile(fileBase, '')
            .then(() => {
                appendContent(fileBase, actionsImport(stateStore));
                appendContent(fileBase, actionsType(stateStore));
                appendContent(fileBase, actionsSwitch(stateStore));
                appendContent(fileBase, createAction(stateStore));
            }))
        .then(() => createFile(providerFile, provider()))
        .catch(logError);

module.exports = {
    createStore,
};
