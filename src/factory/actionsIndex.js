const actionsIndex = name => `export { default as ${name} } from './${name}';
`;

module.exports = actionsIndex;
