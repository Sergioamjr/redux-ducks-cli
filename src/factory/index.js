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

module.exports = {
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
