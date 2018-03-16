const reducer = () => `
import { combineReducers } from 'redux'
import * as reducers from './../store'
const rootReducer = combineReducers(reducers)
export default rootReducer
`;

module.exports = reducer;
