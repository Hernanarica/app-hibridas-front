export function getAllUsersService() {
	return fetch(`${ import.meta.env.VITE_BASE_URL_API }/user/users`)
		.then(res => res.json())
		.then(data => data)
		.catch(err => {
			console.error(err);
		});
}

export function deleteUserService(id) {
	return fetch(`${ import.meta.env.VITE_BASE_URL_API }/user/${ id }`, {
		method: 'DELETE'
	})
		.then(res => res.json())
		.then(data => data)
		.catch(err => {
			console.error(err);
		});
}