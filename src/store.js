/* eslint-disable */
const {
  createFolder,
  createFile,
  base,
  appendContent,
  logError,
  getConfigFile,
  restObject,
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

// Create a new state store
const createStateStore = async (state, stateInStore, value = {}, config) => {
    const baseOfState = `${base}/store/${state}/${state}.js`;
    const actionsSalved = hasActionSalved(config, state, stateInStore);
    const configKeys = Object.keys(JSON.parse(restObject(config, state, '')));

    try {
        createFolder(`${base}/store/${state}`);
        createFile(`${base}/store/${state}/index.js`, exportDefault(state));
        const StoreDefault = await getConfigFile(`${base}/store/storeDefault.json`);
        createFile(`${base}/store/storeDefault.json`, restObject(JSON.parse(StoreDefault), state, value));
        createFile(`${base}/reduxConfig.json`, restObject(config, state, actionsSalved));
        await createFile(`${base}/store/index.js`, '');
        configKeys.map(item => appendContent(`${base}/store/index.js`, actionsIndex(item))).join('');
        await createFile(baseOfState, '');
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

module.exports = {
    createStore,
    createStateStore,
};
