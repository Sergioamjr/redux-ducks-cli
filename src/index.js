#!/usr/bin/env node

const yargs = require('yargs');
const { createReducer } = require('./reducers');
const { createStore, createStateStore, removeStateStore, removeActionState } = require('./store');
const { createFolder, base, logError, logSuccess, createFile, getConfigFile } = require('./communs');

// Argsv detalhes
const yarg = yargs
    .option('init', {
        describe: 'Inicia o projeto',
        alias: 'i'
    })
    .option('state', {
        describe: 'Cria um estado na aplicação',
        alias: 's'
    })
    .option('action', {
        describe: 'Adiciona uma action em um state',
        alias: 'a'
    })
    .option('value', {
        describe: 'Define o valor padrão de um state',
        alias: 'v'
    })
    .option('removeState', {
        describe: 'Remove um estado',
        alias: 'r'
    })
    .option('removeAction', {
        describe: 'Remove uma Action de um Estado',
        alias: 'd'
    })
    .help()
    .argv;

const { init, state, action, value, change, removeState: removeState_, removeAction: removeAction_ } = yarg;

const starter = async () => {
    try {
        await createFolder(base);
        createFile(`${base}/reduxConfig.json`, '{}');
        createReducer();
        createStore();
        logSuccess('Projeto iniciado com sucesso.');
    } catch(error) {
        logError(error);
    }
};

const addState = async () => {
    try {
        const file  = await getConfigFile();
        const fileParsed = await JSON.parse(file);
        createStateStore(state, action, value, fileParsed, change);
        logSuccess(`Estado ${state} criado com sucesso.`);
    } catch(error) {
        logError(error);
    }
};

const removeState = async (state) => {
    try {
        const configFile  = await getConfigFile();
        const configStore = await getConfigFile(`${base}/store/storeConfig.json`);
        const fileParsed = await JSON.parse(configFile);
        const storeParsed = await JSON.parse(configStore);
        await removeStateStore(state, fileParsed, storeParsed);
    } catch(error) {
        logError(error);
    }
};

const removeAction = async (action, state) => {
    try {
        const file  = await getConfigFile();
        const fileParsed = await JSON.parse(file);
        await removeActionState(action, state, fileParsed);
        logSuccess(`Action ${action} removido do estado ${state} com sucesso.`);
    } catch(error) {
        logError(error);
    }
};

// Start
if (init) {
    starter();
}

// Create a state
if (state && !removeAction_ && !removeState_) {
    addState();
}

// Remove a state
if(removeState_) {
    removeState(removeState_);
}

// Remove an action
if(removeAction_ && state) {
    removeAction(removeAction_, state);
}

