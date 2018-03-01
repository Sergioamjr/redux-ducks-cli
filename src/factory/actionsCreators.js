const createAction = name => `
export function action${name}(payload) {
    return {
      type: UPDATE_${name.toUpperCase()},
      payload
    }
  }
`;

module.exports = createAction;
