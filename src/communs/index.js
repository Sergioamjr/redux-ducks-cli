const fs = require('fs');

const base = 'redux';

const createFolder = path => new Promise((resolve, reject) =>
    !fs.existsSync(path) ? fs.mkdir(path, err => err ? reject() : resolve()) : resolve()
);

const returnPromise = (method, path, content) =>
    new Promise((resolve, reject) =>
        method(path, content, err => err ? reject() : resolve()));

const createFile = (path, content) => returnPromise(fs.writeFile, path, content);

const appendContent = (file, content) => returnPromise(fs.appendFile, file, content);


module.exports = {
    createFolder,
    createFile,
    appendContent,
    base,
};
