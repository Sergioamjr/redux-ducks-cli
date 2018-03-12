/* eslint-disable */
const { createFolder, createFile, base, appendContent, logError, getConfigFile } = require('./communs');
const { createAction, actionsType,
  actionsSwitchInit,
  actionsSwitchMiddle,
  actionsSwitchEnd, actionsImport, actionsIndex, provider } = require('./factory');
/* eslint-enable */

// Create Reducer
const createStore = async () => {
    try {
        await createFolder(`${base}/store`);
        createFile(`${base}/store/storeDefault.json`, '{}');
        createFile(`${base}/store/index.js`, '');
        createFile(`${base}/index.js`, provider());
    } catch(error) {
        logError(error);
    }
};


const restObject = (Obj, add, value) => JSON.stringify(Object.assign({}, Obj, { [add]: value }));


// Create a new state store
const createStateStore = (state, stateInStore, value = {}, config) =>
    createFolder(`${base}/store/${state}`)
        .then(() => getConfigFile(`${base}/store/storeDefault.json`)
            .then(storeDefault => createFile(`${base}/store/storeDefault.json`, restObject(JSON.parse(storeDefault), state, value))))
        .then(() =>  createFile(`${base}/reduxConfig.json`,
            restObject(config, state,
                config[state] ?
                    stateInStore && !config[state].includes(stateInStore) ?
                        config[state].concat([stateInStore]) :
                        config[state] :
                    stateInStore ? [stateInStore] : [])))
        .then(() => createFile(`${base}/store/${state}/${state}.js`, '')
            .then(() => {
                const arr = config[state];
                if (stateInStore) {
                    appendContent(`${base}/store/${state}/${state}.js`, actionsImport(state))
                        .then(() => arr.map(item => appendContent(`${base}/store/${state}/${state}.js`, actionsType(item))).join(''))
                        .then(() => appendContent(`${base}/store/${state}/${state}.js`, actionsSwitchInit(stateInStore)))
                        .then(() => arr.map(item => appendContent(`${base}/store/${state}/${state}.js`, actionsSwitchMiddle(item))).join(''))
                        .then(() => appendContent(`${base}/store/${state}/${state}.js`, actionsSwitchEnd(stateInStore)))
                        .then(() => arr.map(item => appendContent(`${base}/store/${state}/${state}.js`, createAction(item))).join(''));
                }
            })
            .catch(logError)
        )
        .catch(logError);


module.exports = {
    createStore,
    createStateStore
};
