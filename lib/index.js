#!/usr/bin/env node
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var yargs = require('yargs');

var _require = require('./reducers'),
    createReducer = _require.createReducer;

var _require2 = require('./store'),
    createStore = _require2.createStore,
    createStateStore = _require2.createStateStore,
    removeStateStore = _require2.removeStateStore,
    removeActionState = _require2.removeActionState;

var _require3 = require('./communs'),
    createFolder = _require3.createFolder,
    base = _require3.base,
    logError = _require3.logError,
    logSuccess = _require3.logSuccess,
    createFile = _require3.createFile,
    getConfigFile = _require3.getConfigFile;

// Argsv detalhes


var yarg = yargs.option('init', {
    describe: 'Inicia o projeto',
    alias: 'i'
}).option('state', {
    describe: 'Cria um estado na aplicação',
    alias: 's'
}).option('action', {
    describe: 'Adiciona uma action em um state',
    alias: 'a'
}).option('value', {
    describe: 'Define o valor padrão de um state',
    alias: 'v'
}).option('removeState', {
    describe: 'Remove um estado',
    alias: 'r'
}).option('removeAction', {
    describe: 'Remove uma Action de um Estado',
    alias: 'd'
}).help().argv;

var init = yarg.init,
    state = yarg.state,
    action = yarg.action,
    value = yarg.value,
    change = yarg.change,
    removeState_ = yarg.removeState,
    removeAction_ = yarg.removeAction;


var starter = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return createFolder(base);

                    case 3:
                        createFile(base + '/reduxConfig.json', '{}');
                        createReducer();
                        createStore();
                        logSuccess('Projeto iniciado com sucesso.');
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

    return function starter() {
        return _ref.apply(this, arguments);
    };
}();

var addState = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var file, fileParsed;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return getConfigFile();

                    case 3:
                        file = _context2.sent;
                        _context2.next = 6;
                        return JSON.parse(file);

                    case 6:
                        fileParsed = _context2.sent;

                        createStateStore(state, action, value, fileParsed, change);
                        logSuccess('Estado ' + state + ' criado com sucesso.');
                        _context2.next = 14;
                        break;

                    case 11:
                        _context2.prev = 11;
                        _context2.t0 = _context2['catch'](0);

                        logError(_context2.t0);

                    case 14:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 11]]);
    }));

    return function addState() {
        return _ref2.apply(this, arguments);
    };
}();

var removeState = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(state) {
        var configFile, configStore, fileParsed, storeParsed;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return getConfigFile();

                    case 3:
                        configFile = _context3.sent;
                        _context3.next = 6;
                        return getConfigFile(base + '/store/storeConfig.json');

                    case 6:
                        configStore = _context3.sent;
                        _context3.next = 9;
                        return JSON.parse(configFile);

                    case 9:
                        fileParsed = _context3.sent;
                        _context3.next = 12;
                        return JSON.parse(configStore);

                    case 12:
                        storeParsed = _context3.sent;
                        _context3.next = 15;
                        return removeStateStore(state, fileParsed, storeParsed);

                    case 15:
                        _context3.next = 20;
                        break;

                    case 17:
                        _context3.prev = 17;
                        _context3.t0 = _context3['catch'](0);

                        logError(_context3.t0);

                    case 20:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[0, 17]]);
    }));

    return function removeState(_x) {
        return _ref3.apply(this, arguments);
    };
}();

var removeAction = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(action, state) {
        var file, fileParsed;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return getConfigFile();

                    case 3:
                        file = _context4.sent;
                        _context4.next = 6;
                        return JSON.parse(file);

                    case 6:
                        fileParsed = _context4.sent;
                        _context4.next = 9;
                        return removeActionState(action, state, fileParsed);

                    case 9:
                        logSuccess('Action ' + action + ' removido do estado ' + state + ' com sucesso.');
                        _context4.next = 15;
                        break;

                    case 12:
                        _context4.prev = 12;
                        _context4.t0 = _context4['catch'](0);

                        logError(_context4.t0);

                    case 15:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[0, 12]]);
    }));

    return function removeAction(_x2, _x3) {
        return _ref4.apply(this, arguments);
    };
}();

// Start
if (init) {
    starter();
}

// Create a state
if (state && !removeAction_ && !removeState_) {
    addState();
}

// Remove a state
if (removeState_) {
    removeState(removeState_);
}

// Remove an action
if (removeAction_ && state) {
    removeAction(removeAction_, state);
}