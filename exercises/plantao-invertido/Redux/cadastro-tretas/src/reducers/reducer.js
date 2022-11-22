const INITIAL_STATE = {
  tretas: [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TRETA':
      return {
        ...state,
        tretas: [
          ...state.tretas,
          { nome: action.nome, preferencia: action.preferencia },
        ],
      };
      case 'DEL_TRETA':
        return {
          ...state,
          tretas: [ 
            ...state.tretas.slice(0, action.index),
            ...state.tretas.slice(action.index + 1, state.length)
          ]
        };
    default:
      return state;
  }
}

export default reducer;
