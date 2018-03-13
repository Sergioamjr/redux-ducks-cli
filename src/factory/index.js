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

module.exports = {
    exportDefault,
    createAction,
    actionsType,
    actionsSwitchInit,
    actionsSwitchMiddle,
    actionsSwitchEnd,
    actionsImport,
    actionsIndex,
    provider,
    reducer,
};
