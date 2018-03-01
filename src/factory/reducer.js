const reducer = () => `
import { combineReducers } from 'redux'
import * as reducers from './../Store'
const rootReducer = combineReducers(reducers)
export default rootReducer
`;

module.exports = reducer;
