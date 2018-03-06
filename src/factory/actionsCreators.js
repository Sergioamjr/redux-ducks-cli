const createAction = name => `
export function action${name}(payload) {
    return {
      type: ${name.toUpperCase()},
      payload
    }
  }
`;

module.exports = createAction;
