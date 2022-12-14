import { useReducer } from 'react';
import { userReducer } from '../state/reducers';
import { UserContext } from '../state/context';

const initialState = {
	name: null,
	lastname: null,
	email: null,
	role: null
};

const init = () => JSON.parse(localStorage.getItem('userCredentials')) ?? initialState;

export function UserContextProvider({ children }) {
	const [ state, dispatch ] = useReducer(userReducer, initialState, init);

	const setUser = (formData) => {
		dispatch({
			type: 'setUser',
			payload: {
				token: formData.token,
				name: formData.name,
				lastname: formData.lastname,
				email: formData.email,
				role: formData.role
			}
		});
		
		localStorage.setItem('userCredentials', JSON.stringify(formData));
	};
	
	const clearUser = (formData) => {
		dispatch({
			type: 'clearUser',
		});
		
		localStorage.removeItem('userCredentials');
	};
	
	const value = {
		state,
		setUser,
		clearUser
	};
	
	return (
		<UserContext.Provider value={ value }>
			{ children }
		</UserContext.Provider>
	);
}