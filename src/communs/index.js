const { existsSync, mkdir, writeFile, appendFile } = require('fs');

const base = 'redux';

const returnPromise = (method, path, content) =>
    new Promise((resolve, reject) =>
        method(path, content, err => err ? reject() : resolve()));

const createFolder = path => new Promise((resolve, reject) =>
    !existsSync(path) ? mkdir(path, err => err ? reject() : resolve()) : resolve()
);

const createFile = (path, content) => returnPromise(writeFile, path, content);

const appendContent = (file, content) => returnPromise(appendFile, file, content);

module.exports = {
    createFolder,
    createFile,
    appendContent,
    base,
};
