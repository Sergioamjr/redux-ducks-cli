import Store from './storeDefault.json'
const { UpdateButton } = Store

const UPDATEBUTTON = 'UPDATEBUTTON'
    
export default function reducer(state = UpdateButton, action) {
    const { type, payload } = action
    switch (type) {
    case BUTTON:
        return { ...state, ...payload };
        break;
    default:
    return state;
        break;
    }
}
    
export function actionUpdateButton(payload) {
    return {
      type: UPDATEBUTTON,
      payload
    }
  }
