/* eslint-disable */
const {
  createFolder,
  createFile,
  base,
  appendContent,
  logError,
  getConfigFile,
  restObject,
  deleteFolder,
  deleteFile,
  hasActionSalved } = require('./communs');

const {
  createAction,
  actionsType,
  actionsSwitchInit,
  actionsSwitchMiddle,
  actionsSwitchEnd,
  exportDefault,
  actionsImport,
  actionsIndex,
  provider } = require('./factory');
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

// Create a new state in store and config
const createStateStore = async (state, stateInStore, value = {}, config) => {
    const baseOfState = `${base}/store/${state}/${state}.js`;
    const actionsSalved = hasActionSalved(config, state, stateInStore);
    const configKeys = Object.keys(JSON.parse(restObject(config, state, '')));

    try {
        await createFolder(`${base}/store/${state}`);
        createFile(`${base}/store/${state}/index.js`, exportDefault(state));
        const StoreDefault = await getConfigFile(`${base}/store/storeDefault.json`);
        createFile(`${base}/store/storeDefault.json`, restObject(JSON.parse(StoreDefault), state, value));
        createFile(`${base}/reduxConfig.json`, restObject(config, state, actionsSalved));
        await createFile(`${base}/store/index.js`);
        configKeys.map(item => appendContent(`${base}/store/index.js`, actionsIndex(item))).join('');
        await createFile(baseOfState);
        if(actionsSalved.length > 0) {
            await appendContent(baseOfState, actionsImport(state));
            actionsSalved.map(item => appendContent(baseOfState, actionsType(item))).join('');
            await appendContent(baseOfState, actionsSwitchInit(state));
            actionsSalved.map(item => appendContent(baseOfState, actionsSwitchMiddle(item))).join('');
            await appendContent(baseOfState, actionsSwitchEnd());
            actionsSalved.map(item => appendContent(baseOfState, createAction(item))).join('');
        }
    } catch(error) {
        logError(error);
    }
};

const deleteAndSave = (config, state, base) => {
    if (config[state]) {
        delete config[state];
        createFile(base, JSON.stringify(Object.assign({}, config)));
    }
};

// Remove state from store and config
const removeStateStore = async (state, config, store) => {
    try {
        deleteAndSave(config, state, `${base}/reduxConfig.json`);
        deleteAndSave(store, state, `${base}/reduxConfig.json`);
        await deleteFile(`${base}/store/${state}/${state}.js`);
        await deleteFile(`${base}/store/${state}/index.js`);
        await deleteFolder(`${base}/store/${state}`);
    } catch(error) {
        logError(error);
    }
};

// Remove action from state
const removeActionState = async (action, state, config) => {
    const baseOfState = `${base}/store/${state}/${state}.js`;
    if(config[state].includes(action)) {
        const newConfigState = config[state].filter(item => item !== action);
        await createFile(`${base}/reduxConfig.json`, restObject(config, state, newConfigState));
        await createFile(baseOfState);
        if(newConfigState.length > 0) {
            await appendContent(baseOfState, actionsImport(state));
            newConfigState.map(item => appendContent(baseOfState, actionsType(item))).join('');
            await appendContent(baseOfState, actionsSwitchInit(state));
            newConfigState.map(item => appendContent(baseOfState, actionsSwitchMiddle(item))).join('');
            await appendContent(baseOfState, actionsSwitchEnd());
            newConfigState.map(item => appendContent(baseOfState, createAction(item))).join('');
        }
    }
};

module.exports = {
    createStore,
    createStateStore,
    removeStateStore,
    removeActionState,
};
