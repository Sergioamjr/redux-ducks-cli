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
        .then(() => createFile(fileBaseIndex, '')
            .then(() => {
                appendContent(fileBaseIndex, actionsIndex(actionsName));
            }))
        .then(() => createFile(fileBase, '')
            .then(() => {
                appendContent(fileBase, actionsImport(actionsName));
                appendContent(fileBase, actionsType(actionsName));
                appendContent(fileBase, actionsSwitch(actionsName));
                appendContent(fileBase, createAction(actionsName));
            }))
        .then(() => createFile(providerFile, provider()))
        .catch(logError);

module.exports = {
    createStore,
};
