const actionsImport = name => `import Store from './storeDefault.json';
const { ${name} } = Store;

`;

module.exports = actionsImport;
