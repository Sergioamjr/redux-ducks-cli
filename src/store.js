/* eslint-disable */
console.log('store.js');
/* eslint-enable */

const { createFolder, createFile, base, appendContent } = require('./communs');
const { createAction, actionsType, actionsSwitch, actionsImport, actionsIndex } = require('./factory');

const storeDefault = {
    hello: 'Hello World!'
};

const actionsName = 'button';
const fileBaseIndex = `${base}/store/index.js`;
const fileBase = `${base}/store/${actionsName}/${actionsName}.js`;

// Create Reducer
createFolder(`${base}`)
    .then(() => createFolder(`${base}/store`))
    .then(() => createFolder(`${base}/store/${actionsName}`)
        .then(() => createFile(`${base}/store/storeDefault.json`, JSON.stringify(storeDefault)))
        .then(() => createFile(fileBaseIndex, ''))
        .then(() => createFile(fileBase, ''))

        // Add content
        .then(() => appendContent(fileBase, actionsImport(actionsName)))
        .then(() => appendContent(fileBase, actionsType(actionsName)))
        .then(() => appendContent(fileBase, actionsSwitch(actionsName)))
        .then(() => appendContent(fileBase, createAction(actionsName)))
        .then(() => appendContent(fileBaseIndex, actionsIndex(actionsName)))
    );
