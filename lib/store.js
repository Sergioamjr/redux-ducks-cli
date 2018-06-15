'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* eslint-disable */
var _require = require('./communs'),
    base = _require.base,
    logError = _require.logError,
    createFile = _require.createFile,
    deleteFile = _require.deleteFile,
    logSuccess = _require.logSuccess,
    restObject = _require.restObject,
    createFolder = _require.createFolder,
    deleteFolder = _require.deleteFolder,
    getConfigFile = _require.getConfigFile,
    deleteAndSave = _require.deleteAndSave,
    appendContent = _require.appendContent,
    changeActionBehavior = _require.changeActionBehavior,
    hasActionSalved = _require.hasActionSalved;

var _require2 = require('./factory'),
    createAction = _require2.createAction,
    actionsType = _require2.actionsType,
    actionsSwitchInit = _require2.actionsSwitchInit,
    actionsSwitchMiddle = _require2.actionsSwitchMiddle,
    actionsSwitchEnd = _require2.actionsSwitchEnd,
    exportDefault = _require2.exportDefault,
    actionsImport = _require2.actionsImport,
    storeDefault = _require2.storeDefault,
    actionsIndex = _require2.actionsIndex,
    provider = _require2.provider;
/* eslint-enable */

// Create Reducer


var createStore = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return createFolder(base + '/store');

                    case 3:
                        createFile(base + '/store/storeConfig.json', '{}');
                        createFile(base + '/store/storeDefault.js', storeDefault('{}'));
                        createFile(base + '/store/index.js', '');
                        createFile(base + '/index.js', provider());
                        _context.next = 12;
                        break;

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](0);

                        logError(_context.t0);

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 9]]);
    }));

    return function createStore() {
        return _ref.apply(this, arguments);
    };
}();

var createSwitchForEach = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(newConfigState, baseOfState, state) {
        var action = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var howChange = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        if (!(newConfigState.length > 0)) {
                            _context2.next = 10;
                            break;
                        }

                        _context2.next = 3;
                        return appendContent(baseOfState, actionsImport(state));

                    case 3:
                        newConfigState.map(function (item) {
                            return appendContent(baseOfState, actionsType(item));
                        }).join('');
                        _context2.next = 6;
                        return appendContent(baseOfState, actionsSwitchInit(state));

                    case 6:
                        newConfigState.map(function (item) {
                            return appendContent(baseOfState, actionsSwitchMiddle(item, changeActionBehavior(item, action, howChange)));
                        }).join('');
                        _context2.next = 9;
                        return appendContent(baseOfState, actionsSwitchEnd());

                    case 9:
                        newConfigState.map(function (item) {
                            return appendContent(baseOfState, createAction(item));
                        }).join('');

                    case 10:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function createSwitchForEach(_x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
    };
}();

// Create a new state in store and config
var createStateStore = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(state, stateInStore) {
        var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var config = arguments[3];
        var howChange = arguments[4];
        var baseOfState, actionsSalved, configKeys, StoreDefault;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        baseOfState = base + '/store/' + state + '/' + state + '.js';
                        actionsSalved = hasActionSalved(config, state, stateInStore);
                        configKeys = Object.keys(JSON.parse(restObject(config, state, '')));
                        _context3.prev = 3;
                        _context3.next = 6;
                        return createFolder(base + '/store/' + state);

                    case 6:
                        createFile(base + '/store/' + state + '/index.js', exportDefault(state));
                        _context3.next = 9;
                        return getConfigFile(base + '/store/storeConfig.json');

                    case 9:
                        StoreDefault = _context3.sent;

                        createFile(base + '/store/storeConfig.json', restObject(JSON.parse(StoreDefault), state, value));
                        createFile(base + '/reduxConfig.json', restObject(config, state, actionsSalved));
                        _context3.next = 14;
                        return createFile(base + '/store/storeDefault.js', storeDefault(restObject(JSON.parse(StoreDefault), state, value)));

                    case 14:
                        _context3.next = 16;
                        return createFile(base + '/store/index.js');

                    case 16:
                        configKeys.map(function (item) {
                            return appendContent(base + '/store/index.js', actionsIndex(item));
                        }).join('');
                        _context3.next = 19;
                        return createFile(baseOfState);

                    case 19:
                        createSwitchForEach(actionsSalved, baseOfState, state, stateInStore, howChange);
                        _context3.next = 25;
                        break;

                    case 22:
                        _context3.prev = 22;
                        _context3.t0 = _context3['catch'](3);

                        logError(_context3.t0);

                    case 25:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[3, 22]]);
    }));

    return function createStateStore(_x7, _x8) {
        return _ref3.apply(this, arguments);
    };
}();

// Remove state from store and config
var removeStateStore = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(state, config, store) {
        var configKeys;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        configKeys = Object.keys(JSON.parse(restObject(config, state, '')));
                        _context4.next = 4;
                        return deleteAndSave(state, config, store, storeDefault);

                    case 4:
                        _context4.next = 6;
                        return deleteFile(base + '/store/' + state + '/' + state + '.js');

                    case 6:
                        _context4.next = 8;
                        return deleteFile(base + '/store/' + state + '/index.js');

                    case 8:
                        _context4.next = 10;
                        return deleteFolder(base + '/store/' + state);

                    case 10:
                        configKeys.map(function (item) {
                            return createFile(base + '/store/index.js', actionsIndex(item));
                        }).join('');
                        logSuccess('Estado ' + state + ' removido com sucesso.');
                        _context4.next = 17;
                        break;

                    case 14:
                        _context4.prev = 14;
                        _context4.t0 = _context4['catch'](0);

                        logError(_context4.t0);

                    case 17:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[0, 14]]);
    }));

    return function removeStateStore(_x9, _x10, _x11) {
        return _ref4.apply(this, arguments);
    };
}();

// Remove action from state
var removeActionState = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(action, state, config) {
        var baseOfState, newConfigState;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        baseOfState = base + '/store/' + state + '/' + state + '.js';

                        if (!config[state].includes(action)) {
                            _context5.next = 10;
                            break;
                        }

                        newConfigState = config[state].filter(function (item) {
                            return item !== action;
                        });
                        _context5.next = 5;
                        return createFile(base + '/reduxConfig.json', restObject(config, state, newConfigState));

                    case 5:
                        _context5.next = 7;
                        return createFile(baseOfState);

                    case 7:
                        createSwitchForEach(newConfigState, baseOfState, state);
                        _context5.next = 11;
                        break;

                    case 10:
                        throw 'Action ' + action + ' n\xE3o encontrada no estado ' + state;

                    case 11:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function removeActionState(_x12, _x13, _x14) {
        return _ref5.apply(this, arguments);
    };
}();

module.exports = {
    createStore: createStore,
    createStateStore: createStateStore,
    removeStateStore: removeStateStore,
    removeActionState: removeActionState
};