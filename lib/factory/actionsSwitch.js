'use strict';

var actionsSwitchInit = function actionsSwitchInit(name) {
    return '\nexport default function reducer(state = ' + name + ', action) {\n    const { type, payload } = action\n    switch (type) {';
};

var actionsSwitchMiddle = function actionsSwitchMiddle(name) {
    var howchange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '{ ...state, ...payload }';
    return '\n    case ' + name.toUpperCase() + ':\n        return ' + howchange + ';\n        break;';
};

var actionsSwitchEnd = function actionsSwitchEnd() {
    return '\n    default:\n    return state;\n        break;\n    }\n}';
};

module.exports = {
    actionsSwitchInit: actionsSwitchInit,
    actionsSwitchMiddle: actionsSwitchMiddle,
    actionsSwitchEnd: actionsSwitchEnd
};