const fs = require('fs');

const base = 'redux'
const logError = err => console.log('Error: ', err);
const createFolder = path => !fs.existsSync(path) ? fs.mkdir(path, logError) : ''
const createFile = (path, content) => fs.writeFile(path, content);
const appendContent = (file, content) => fs.appendFile(file, content);

module.exports = {
    createFolder,
    createFile,
    appendContent,
    base,
}