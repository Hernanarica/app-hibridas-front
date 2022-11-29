import { useReducer } from 'react';
import { authReducer } from '../state/reducers';
import { AuthContext } from '../state/context';

const initialState = {
	isAuthenticated: Boolean(localStorage.getItem('isAuthenticated'))
};

export function AuthContextProvider({ children }) {
	const [ state, dispatch ] = useReducer(authReducer, initialState);
	
	const login = () => {
		dispatch({
			type: 'login',
		});
		
		localStorage.setItem('isAuthenticated', true);
	}
	
	const logout = () => {
		dispatch({
			type: 'logout',
		});
		
		localStorage.removeItem('isAuthenticated');
	}
	
	const value = {
		state,
		login,
		logout
	}
	
	return (
		<AuthContext.Provider value={ value }>
			{ children }
		</AuthContext.Provider>
	);
}