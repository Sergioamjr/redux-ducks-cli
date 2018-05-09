const actionsImport = name => `import Store from './../storeDefault.js';
const { ${name} } = Store;

`;

module.exports = actionsImport;
