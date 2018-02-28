console.log('store.js');
const { createFolder, createFile, base, appendContent } = require('./communs');
const { createAction, actionsType, actionsSwitch, actionsImport, actionsIndex } = require('./factory')

const storeDefault = {
    hello: 'Hello World!'
}

const actionsName = 'button';
const fileBaseIndex = `${base}/store/index.js`
const fileBase = `${base}/store/${actionsName}/${actionsName}.js`


// Create Reducer
createFolder(`${base}`);
createFolder(`${base}/store`);
createFolder(`${base}/store/${actionsName}`);
createFile(`${base}/store/storeDefault.json`, JSON.stringify(storeDefault));
createFile(fileBaseIndex, '');
createFile(fileBase, '');

appendContent(fileBase, actionsImport(actionsName));
appendContent(fileBase, actionsType(actionsName));
appendContent(fileBase, actionsSwitch(actionsName));
appendContent(fileBase, createAction(actionsName));
appendContent(fileBaseIndex, actionsIndex(actionsName));