import Store from './storeDefault.json'
const { hello } = Store

const UPDATE_HELLO = 'UPDATE_HELLO'
    
export default function reducer(state = hello, action) {
    const { type, payload } = action
    switch (type) {
    case UPDATE_HELLO:
        return { ...state, ...payload };
        break;
    default:
    return state;
        break;
    }
}
    
export function actionhello(payload) {
    return {
      type: UPDATE_HELLO,
      payload
    }
  }
