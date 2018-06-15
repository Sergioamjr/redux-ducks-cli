'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('fs'),
    existsSync = _require.existsSync,
    mkdir = _require.mkdir,
    writeFile = _require.writeFile,
    appendFile = _require.appendFile,
    readFile = _require.readFile,
    rmdir = _require.rmdir,
    unlink = _require.unlink;

var base = 'src/redux';

var logError = function logError(error) {
    /* eslint-disable */
    console.log('Não foi possível completar sua ação: ', error);
    /* eslint-enable */
};

var logSuccess = function logSuccess() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Criado com sucesso.';

    /* eslint-disable */
    console.log(message);
    /* eslint-enable */
};

var returnPromise = function returnPromise(method, path, content) {
    return new Promise(function (resolve, reject) {
        return method(path, content, function (err) {
            return err ? reject() : resolve();
        });
    });
};

var readFilePromise = function readFilePromise(method, path) {
    return new Promise(function (resolve, reject) {
        return method(path, 'utf8', function (err, data) {
            return err ? reject(err) : resolve(data);
        });
    });
};

var singlePromise = function singlePromise(fn, file) {
    return new Promise(function (resolve, reject) {
        return fn(file, function (err) {
            return err ? reject('Estado ' + file + ' n\xE3o encontrado.') : resolve();
        });
    });
};

var createFolder = function createFolder(path) {
    return new Promise(function (resolve, reject) {
        return !existsSync(path) ? mkdir(path, function (err) {
            return err ? reject() : resolve();
        }) : resolve();
    });
};

var createFile = function createFile(path) {
    var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return returnPromise(writeFile, path, content);
};

var appendContent = function appendContent(file, content) {
    return returnPromise(appendFile, file, content);
};

var createConfig = function createConfig(path) {
    var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return returnPromise(writeFile, path, content);
};

var getConfigFile = function getConfigFile() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : base + '/reduxConfig.json';
    return readFilePromise(readFile, path);
};

var getConfigStore = function getConfigStore() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : base + '/store/storeConfig.json';
    return readFilePromise(readFile, path);
};

var restObject = function restObject(Obj, add, value) {
    return JSON.stringify(Object.assign({}, Obj, _defineProperty({}, add, value)));
};

var deleteFolder = function deleteFolder(path) {
    return singlePromise(rmdir, path);
};

var deleteFile = function deleteFile(file) {
    return singlePromise(unlink, file);
};

var hasActionSalved = function hasActionSalved(config, state, stateInStore) {
    if (config[state]) {
        if (stateInStore && !config[state].includes(stateInStore)) {
            return config[state].concat([stateInStore]);
        } else {
            return config[state];
        }
    } else {
        if (stateInStore) {
            return [stateInStore];
        } else {
            return [];
        }
    }
};

var deleteAndSave = function deleteAndSave(state, config, store, format) {
    return new Promise(function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;

                            config[state] && delete config[state];
                            store[state] && delete store[state];
                            _context.next = 5;
                            return createFile(base + '/reduxConfig.json', JSON.stringify(config));

                        case 5:
                            _context.next = 7;
                            return createFile(base + '/store/storeConfig.json', JSON.stringify(store));

                        case 7:
                            _context.next = 9;
                            return createFile(base + '/store/storeDefault.js', format(JSON.stringify(store)));

                        case 9:
                            resolve();
                            _context.next = 15;
                            break;

                        case 12:
                            _context.prev = 12;
                            _context.t0 = _context['catch'](0);

                            reject(_context.t0);

                        case 15:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 12]]);
        }));

        return function (_x6, _x7) {
            return _ref.apply(this, arguments);
        };
    }());
};

var changeActionBehavior = function changeActionBehavior(item, state, change) {
    if (change && item === state) {
        return change;
    }
};

module.exports = {
    base: base,
    logError: logError,
    deleteFile: deleteFile,
    createFile: createFile,
    restObject: restObject,
    logSuccess: logSuccess,
    createFolder: createFolder,
    createConfig: createConfig,
    deleteFolder: deleteFolder,
    getConfigFile: getConfigFile,
    returnPromise: returnPromise,
    deleteAndSave: deleteAndSave,
    getConfigStore: getConfigStore,
    appendContent: appendContent,
    hasActionSalved: hasActionSalved,
    changeActionBehavior: changeActionBehavior
};