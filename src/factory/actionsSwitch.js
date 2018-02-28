const actionsSwitchInit = name => `
export default function reducer(state = ${name}, action) {
    const { type, payload } = action
    switch (type) {`

const actionsSwitchMiddle = name => `case UPDATE_${name.toUpperCase()}:
        return { ...state, ...payload };
        break;`

const actionsSwitchEnd = () => `default:
    return state;
        break;
    }
}`

const actionsSwitch = name => {
    return `
    ${actionsSwitchInit(name)}
    ${actionsSwitchMiddle(name)}
    ${actionsSwitchEnd()}
    `
}

module.exports = actionsSwitch;