const { createFolder, createFile, base, logError } = require('./communs');
const { reducer } = require('./factory/');

const createReducer = () =>
    createFolder(`${base}/reducers`)
        .then(() => createFile(`${base}/reducers/index.js`, reducer()))
        .catch(logError);

module.exports = {
    createReducer,
};
