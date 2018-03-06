const actionsSwitchInit = name => `
export default function reducer(state = ${name}, action) {
    const { type, payload } = action
    switch (type) {`;

const actionsSwitchMiddle = name => `case ${name.toUpperCase()}:
        return { ...state, ...payload };
        break;`;

const actionsSwitchEnd = () => `default:
    return state;
        break;
    }
}`;

const arr = ['button'];

const actionsSwitch = name => {
    return `
    ${actionsSwitchInit(name)}
    ${arr.map(item => actionsSwitchMiddle(item))}
    ${actionsSwitchEnd()}
    `;
};

module.exports = actionsSwitch;
