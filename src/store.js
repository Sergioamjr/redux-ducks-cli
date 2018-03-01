const { createFolder, createFile, base, appendContent, logError } = require('./communs');
const { createAction, actionsType, actionsSwitch, actionsImport, actionsIndex, provider } = require('./factory');

const storeDefault = {
    hello: 'Hello World!'
};

const actionsName = 'button';
const fileBaseIndex = `${base}/store/index.js`;
const fileBase = `${base}/store/${actionsName}/${actionsName}.js`;
const providerFile = `${base}/index.js`;

// Create Reducer
const createStore = () =>
    createFolder(`${base}/store`)
        .then(() => createFolder(`${base}/store/${actionsName}`))
        .then(() => createFile(`${base}/store/storeDefault.json`, JSON.stringify(storeDefault)))
        .then(() => createFile(fileBaseIndex, ''))
        .then(() => createFile(fileBase, ''))
        .then(() => createFile(providerFile, provider()))
        .catch(logError);

// Add content
const addStore = () =>
    appendContent(fileBase, actionsImport(actionsName)
        .then(() => appendContent(fileBase, actionsType(actionsName)))
        .then(() => appendContent(fileBase, actionsSwitch(actionsName)))
        .then(() => appendContent(fileBase, createAction(actionsName)))
        .then(() => appendContent(fileBaseIndex, actionsIndex(actionsName)))
        .catch(logError)
    );

module.exports = {
    createStore,
    addStore,
};
