const actionsIndex = name => `export { default as ${name} } from './${name}/${name}.js'`

module.exports = actionsIndex;