const { existsSync, mkdir, writeFile, appendFile, readFile } = require('fs');

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

const returnSinglePromise = (method, path) =>
    new Promise((resolve, reject) =>
        method(path, 'utf8', (err, data) => err ? reject(err) : resolve(data)));

const createFolder = path => new Promise((resolve, reject) =>
    !existsSync(path) ? mkdir(path, err => err ? reject() : resolve()) : resolve()
);

const createFile = (path, content) => returnPromise(writeFile, path, content);

const appendContent = (file, content) => returnPromise(appendFile, file, content);

const createConfig = (path, content = '') => returnPromise(writeFile, path, content);

const getConfigFile = (path = `${base}/reduxConfig.js`) => returnSinglePromise(readFile, path);

module.exports = {
    createFolder,
    createFile,
    appendContent,
    base,
    logError,
    logSuccess,
    createConfig,
    getConfigFile,
};
