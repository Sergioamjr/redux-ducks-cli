const actionsSwitchInit = name => `
export default function reducer(state = ${name}, action) {
    const { type, payload } = action
    switch (type) {`;

const actionsSwitchMiddle = (name, howchange = '{ ...state, ...payload }') => `
    case ${name.toUpperCase()}:
        return ${howchange};
        break;`;

const actionsSwitchEnd = () => `
    default:
    return state;
        break;
    }
}`;

module.exports = {
    actionsSwitchInit,
    actionsSwitchMiddle,
    actionsSwitchEnd
};
