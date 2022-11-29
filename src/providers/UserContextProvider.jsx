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
				name: formData.name,
				lastname: formData.lastname,
				email: formData.email,
				role: formData.role
			}
		});
		
		localStorage.setItem('userCredentials', JSON.stringify(formData))
	};
	
	const value = {
		state,
		setUser
	};
	
	return (
		<UserContext.Provider value={ value }>
			{ children }
		</UserContext.Provider>
	);
}