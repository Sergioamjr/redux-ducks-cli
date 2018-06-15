'use strict';

var createAction = require('./actionsCreators');
var actionsType = require('./actionsType');

var _require = require('./actionsSwitch'),
    actionsSwitchInit = _require.actionsSwitchInit,
    actionsSwitchMiddle = _require.actionsSwitchMiddle,
    actionsSwitchEnd = _require.actionsSwitchEnd;

var actionsImport = require('./actionsImport');
var actionsIndex = require('./actionsIndex');
var provider = require('./provider');
var reducer = require('./reducer');
var exportDefault = require('./exportDefault');
var storeDefault = require('./storeDefault');

module.exports = {
    exportDefault: exportDefault,
    createAction: createAction,
    actionsType: actionsType,
    actionsSwitchInit: actionsSwitchInit,
    actionsSwitchMiddle: actionsSwitchMiddle,
    actionsSwitchEnd: actionsSwitchEnd,
    actionsImport: actionsImport,
    storeDefault: storeDefault,
    actionsIndex: actionsIndex,
    provider: provider,
    reducer: reducer
};