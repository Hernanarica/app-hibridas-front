const initialState = {
	isAuthenticated: false
};

function authReducer(state = initialState, action) {
	switch (action.type) {
		case 'login':
			return { isAuthenticated: true };
		
		case 'logout':
			return { isAuthenticated: false };
		
		default:
			return state;
	}
}

export default authReducer;
