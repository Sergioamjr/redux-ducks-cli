console.log('reducer.js');
const { createFolder, createFile, base } = require('./communs');

const fileContent = `
import { combineReducers } from 'redux'
import * as reducers from './../Store'
const rootReducer = combineReducers(reducers)
export default rootReducer
`
// Create Reducer
createFolder(`${base}`);
createFolder(`${base}/reducers`);
createFile(`${base}/reducers/index.js`, fileContent)