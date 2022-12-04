const initialState = [];

function postsReducer(state = initialState, action) {
	switch (action.type) {
		case 'getAll':
			return [ ...action.payload ];

		case 'add':
			return [ ...state, action.payload ];
			
		case 'update':
			return state.map(post => {
				if (post._id === action.payload.id) {
					return { ...post, ...action.payload };
				}
				
				return post;
			});
			
		case 'delete':
			return state.filter(post => post._id !== action.payload.id);
		
		default:
			return state;
	}
}

export default postsReducer;