const { existsSync, mkdir, writeFile, appendFile, readFile, rmdir, unlink } = require('fs');

const base = 'redux';

const logError = error => {
    /* eslint-disable */
    console.log('Não foi possível completar sua ação, ', error);
    /* eslint-enable */
};

const logSuccess = (message = 'Created with success') => {
    /* eslint-disable */
    console.log(message);
    /* eslint-enable */
};

const returnPromise = (method, path, content) =>
    new Promise((resolve, reject) =>
        method(path, content, err => err ? reject() : resolve()));

const readFilePromise = (method, path) =>
    new Promise((resolve, reject) =>
        method(path, 'utf8', (err, data) => err ? reject(err) : resolve(data)));

const singlePromise = (fn, file) => new Promise((resolve, reject) =>
    fn(file, err => err ? reject(`Estado ${file} não encontrado.`) : resolve())
);

const createFolder = path => new Promise((resolve, reject) =>
    !existsSync(path) ? mkdir(path, err => err ? reject() : resolve()) : resolve()
);

const createFile = (path, content = '') => returnPromise(writeFile, path, content);

const appendContent = (file, content) => returnPromise(appendFile, file, content);

const createConfig = (path, content = '') => returnPromise(writeFile, path, content);

const getConfigFile = (path = `${base}/reduxConfig.json`) => readFilePromise(readFile, path);

const restObject = (Obj, add, value) => JSON.stringify(Object.assign({}, Obj, { [add]: value }));

const deleteFolder = path => singlePromise(rmdir, path);

const deleteFile = file => singlePromise(unlink, file);

const hasActionSalved = (config, state, stateInStore) => {
    if(config[state]) {
        if(stateInStore && !config[state].includes(stateInStore)) {
            return config[state].concat([stateInStore]);
        } else {
            return config[state];
        }
    } else {
        if(stateInStore) {
            return [stateInStore];
        } else {
            return [];
        }
    }
};

const deleteAndSave = (config, state, format) => new Promise(async (resolve, reject) => {
    try {
        if (config[state]) {
            delete config[state];
            await createFile(`${base}/reduxConfig.json`, JSON.stringify(config));
            await createFile(`${base}/store/storeConfig.json`, JSON.stringify(config));
            await createFile(`${base}/store/storeDefault.js`, format(JSON.stringify(config)));
        }
        resolve();
    } catch(err) {
        reject(err);
    }
});

const changeActionBehavior = (item, state, change) => {
    if (change && item === state) {
        return change;
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
    deleteFile,
    deleteAndSave,
    changeActionBehavior,
};
