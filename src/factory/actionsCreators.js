const createAction = name => `
export function ${name}(payload) {
    return {
      type: ${name.toUpperCase()},
      payload
    }
  }
`;

module.exports = createAction;
