const createAction = require('./actionsCreators');
const actionsType = require('./actionsType');
const {
    actionsSwitchInit,
    actionsSwitchMiddle,
    actionsSwitchEnd
} = require('./actionsSwitch');
const actionsImport = require('./actionsImport');
const actionsIndex = require('./actionsIndex');
const provider = require('./provider');
const reducer = require('./reducer');
const exportDefault = require('./exportDefault');
const storeDefault = require('./storeDefault');

module.exports = {
    exportDefault,
    createAction,
    actionsType,
    actionsSwitchInit,
    actionsSwitchMiddle,
    actionsSwitchEnd,
    actionsImport,
    storeDefault,
    actionsIndex,
    provider,
    reducer,
};
