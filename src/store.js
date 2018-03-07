/* eslint-disable */
const { createFolder, createFile, base, appendContent, logError, getConfigFile } = require('./communs');
const { createAction, actionsType, actionsSwitch, actionsImport, actionsIndex, provider } = require('./factory');
/* eslint-enable */

// Create Reducer
const createStore = () =>
    createFolder(`${base}/store`)
        .then(() => createFile(`${base}/store/storeDefault.json`, ''))
        .then(() => createFile(`${base}/store/index.js`, ''))
        .then(() => createFile(`${base}/index.js`, provider()))
        .catch(logError);


// Create a new state store
const createStateStore = (state, stateInStore, value, config) =>
    createFolder(`${base}/store/${state}`)
        .then(() => appendContent(`${base}/store/storeDefault.json`, JSON.stringify({ [state]: value || {} })))
        .then(() =>  createFile(`${base}/reduxConfig.json`, JSON.stringify(Object.assign({}, config, { [state]: {} }))))
        .then(() => createFile(`${base}/store/${state}/${state}.js`, '')
            .then(() => {
                if (stateInStore) {
                    appendContent(`${base}/store/${state}/${state}.js`, actionsImport(stateInStore));
                    appendContent(`${base}/store/${state}/${state}.js`, actionsType(stateInStore));
                    appendContent(`${base}/store/${state}/${state}.js`, actionsSwitch(stateInStore));
                    appendContent(`${base}/store/${state}/${state}.js`, createAction(stateInStore));
                }
            })
            .catch(logError)
        )
        .catch(logError);


module.exports = {
    createStore,
    createStateStore
};


// .then(() => {
//   appendContent(fileBase, actionsImport(stateStore));
//   appendContent(fileBase, actionsType(stateStore));
//   appendContent(fileBase, actionsSwitch(stateStore));
//   appendContent(fileBase, createAction(stateStore));
// })




// .then(() => {
//   appendContent(fileBaseIndex, actionsIndex(state));
// })


// const state = 'button';
// // const stateStore = 'UpdateButton';

// // const fileBase = `${base}/store/${state}/${state}.js`;
