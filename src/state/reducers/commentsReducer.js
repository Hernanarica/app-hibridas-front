const initialState = [];

function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case 'getAll':
      return action.payload;

    case 'add':
      return [ action.payload, ...state ];

    default:
      return state;
  }
}

export default commentsReducer;