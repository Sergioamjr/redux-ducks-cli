const createAction = require('./actionsCreators');
const actionsType = require('./actionsType');
const actionsSwitch = require('./actionsSwitch');
const actionsImport = require('./actionsImport');
const actionsIndex = require('./actionsIndex');
const provider = require('./provider');
const reducer = require('./reducer');

module.exports = {
    createAction,
    actionsType,
    actionsSwitch,
    actionsImport,
    actionsIndex,
    provider,
    reducer,
};
