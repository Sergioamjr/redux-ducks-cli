/* eslint-disable */
const {
  base,
  logError,
  createFile,
  deleteFile,
  logSuccess,
  restObject,
  createFolder,
  deleteFolder,
  getConfigFile,
  deleteAndSave,
  appendContent,
  changeActionBehavior,
  hasActionSalved } = require('./communs');

const {
  createAction,
  actionsType,
  actionsSwitchInit,
  actionsSwitchMiddle,
  actionsSwitchEnd,
  exportDefault,
  actionsImport,
  storeDefault,
  actionsIndex,
  provider } = require('./factory');
/* eslint-enable */

// Create Reducer
const createStore = async () => {
    try {
        await createFolder(`${base}/store`);
        createFile(`${base}/store/storeConfig.json`, '{}');
        createFile(`${base}/store/storeDefault.js`, storeDefault('{}'));
        createFile(`${base}/store/index.js`, '');
        createFile(`${base}/index.js`, provider());
    } catch(error) {
        logError(error);
    }
};

const createSwitchForEach = async (newConfigState, baseOfState, state, action = null, howChange = false) => {
    if(newConfigState.length > 0) {
        await appendContent(baseOfState, actionsImport(state));
        newConfigState.map(item => appendContent(baseOfState, actionsType(item))).join('');
        await appendContent(baseOfState, actionsSwitchInit(state));
        newConfigState.map(item => appendContent(baseOfState, actionsSwitchMiddle(item, changeActionBehavior(item, action, howChange)))).join('');
        await appendContent(baseOfState, actionsSwitchEnd());
        newConfigState.map(item => appendContent(baseOfState, createAction(item))).join('');
    }
};

// Create a new state in store and config
const createStateStore = async (state, stateInStore, value = {}, config, howChange) => {
    const baseOfState = `${base}/store/${state}/${state}.js`;
    const actionsSalved = hasActionSalved(config, state, stateInStore);
    const configKeys = Object.keys(JSON.parse(restObject(config, state, '')));

    try {
        await createFolder(`${base}/store/${state}`);
        createFile(`${base}/store/${state}/index.js`, exportDefault(state));
        const StoreDefault = await getConfigFile(`${base}/store/storeConfig.json`);
        createFile(`${base}/store/storeConfig.json`, restObject(JSON.parse(StoreDefault), state, value));
        createFile(`${base}/reduxConfig.json`, restObject(config, state, actionsSalved));
        await createFile(`${base}/store/storeDefault.js`, storeDefault(restObject(JSON.parse(StoreDefault), state, value)));
        await createFile(`${base}/store/index.js`);
        configKeys.map(item => appendContent(`${base}/store/index.js`, actionsIndex(item))).join('');
        await createFile(baseOfState);
        createSwitchForEach(actionsSalved, baseOfState, state, stateInStore, howChange);
    } catch(error) {
        logError(error);
    }
};

// Remove state from store and config
const removeStateStore = async (state, config, store) => {
    try {
        const configKeys = Object.keys(JSON.parse(restObject(config, state, '')));
        await deleteAndSave(state, config, store, storeDefault);
        await deleteFile(`${base}/store/${state}/${state}.js`);
        await deleteFile(`${base}/store/${state}/index.js`);
        await deleteFolder(`${base}/store/${state}`);
        configKeys.map(item => createFile(`${base}/store/index.js`, actionsIndex(item))).join('');
        logSuccess(`Estado ${state} removido com sucesso.`);
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
        createSwitchForEach(newConfigState, baseOfState, state);
    } else {
        throw(`Action ${action} não encontrada no estado ${state}`);
    }
};

module.exports = {
    createStore,
    createStateStore,
    removeStateStore,
    removeActionState,
};
