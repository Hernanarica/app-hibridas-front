const initialState = {
	name: null,
	lastname: null,
	email: null,
	role: null
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case 'setUser':
			return { ...action.payload };
		
		default:
			return state;
	}
}

export default userReducer;