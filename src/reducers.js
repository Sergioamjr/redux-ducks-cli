/* eslint-disable */
console.log('reducer.js');
/* eslint-enable */

const { createFolder, createFile, base } = require('./communs');

const fileContent = `
import { combineReducers } from 'redux'
import * as reducers from './../Store'
const rootReducer = combineReducers(reducers)
export default rootReducer
`;

// Create Reducer
createFolder(`${base}`);
createFolder(`${base}/reducers`);
createFile(`${base}/reducers/index.js`, fileContent);
