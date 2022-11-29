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
		case 'clearUser':
			return { ...initialState };
		
		default:
			return state;
	}
}

export default userReducer;