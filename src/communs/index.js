const { existsSync, mkdir, writeFile, appendFile, readFile, rmdir, unlink } = require('fs');

const base = 'redux';

const logError = error => {
    /* eslint-disable */
    console.log('Not possible create redux config. Reason: ', error);
    /* eslint-enable */
};

const logSuccess = () => {
    /* eslint-disable */
    console.log('Created with success');
    /* eslint-enable */
};

const returnPromise = (method, path, content) =>
    new Promise((resolve, reject) =>
        method(path, content, err => err ? reject() : resolve()));

const readFilePromise = (method, path) =>
    new Promise((resolve, reject) =>
        method(path, 'utf8', (err, data) => err ? reject(err) : resolve(data)));

const createFolder = path => new Promise((resolve, reject) =>
    !existsSync(path) ? mkdir(path, err => err ? reject() : resolve()) : resolve()
);

const createFile = (path, content = '') => returnPromise(writeFile, path, content);

const appendContent = (file, content) => returnPromise(appendFile, file, content);

const createConfig = (path, content = '') => returnPromise(writeFile, path, content);

const getConfigFile = (path = `${base}/reduxConfig.json`) => readFilePromise(readFile, path);

const restObject = (Obj, add, value) => JSON.stringify(Object.assign({}, Obj, { [add]: value }));

const deleteFolder = path => new Promise((resolve, reject) => rmdir(path, err => err ? reject('Errr', err) : resolve('Success')));

const deleteFile = file => new Promise((resolve, reject) => unlink(file, err => err ? reject('Erro ao excluir') : resolve()));

const hasActionSalved = (config, state, stateInStore) => {
    if(config[state]) {
        if(stateInStore && !config[state].includes(stateInStore)) {
            return config[state].concat([stateInStore]);
        } else {
            return config[state];
        }
    } else {
        if(stateInStore) {
            return stateInStore;
        } else {
            return [];
        }
    }
};

module.exports = {
    createFolder,
    createFile,
    appendContent,
    base,
    logError,
    logSuccess,
    createConfig,
    getConfigFile,
    returnPromise,
    restObject,
    hasActionSalved,
    deleteFolder,
    deleteFile
};
