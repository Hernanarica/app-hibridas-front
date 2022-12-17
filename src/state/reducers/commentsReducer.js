const initialState = [];

function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case 'getAll':
      return action.payload;

    case 'add':
      return [ action.payload, ...state ];

    case 'delete':
      return state.filter(item => item._id !== action.payload);

    default:
      return state;
  }
}

export default commentsReducer;