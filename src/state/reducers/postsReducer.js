const initialState = [];

function postsReducer(state = initialState, action) {
	switch (action.type) {
		case 'getAll':
			return action.payload;
			
		case 'delete':
			return state.filter(post => post._id !== action.payload.id);
		
		default:
			return state;
	}
}

export default postsReducer;