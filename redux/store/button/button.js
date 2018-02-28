import Store from './storeDefault.json'
const { button } = Store

const UPDATE_BUTTON = 'UPDATE_BUTTON'
    
export default function reducer(state = button, action) {
    const { type, payload } = action
    switch (type) {
    case UPDATE_BUTTON:
        return { ...state, ...payload };
        break;
    default:
    return state;
        break;
    }
}
    
export function actionbutton(payload) {
    return {
      type: UPDATE_BUTTON,
      payload
    }
  }
