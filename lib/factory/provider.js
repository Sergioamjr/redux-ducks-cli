"use strict";

var provider = function provider() {
  return "\nimport React from 'react'\nimport { createStore, applyMiddleware } from 'redux'\nimport thunk from 'redux-thunk'\nimport Reducers from './reducers'\nimport DefaultStore from './store/storeDefault.js'\n\nconst reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()\n\nconst Store = createStore(Reducers, DefaultStore, reduxDevTools, applyMiddleware(thunk))\n\nexport default Store\n";
};

module.exports = provider;