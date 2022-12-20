export function postCreateService(data) {
	return fetch(`${ import.meta.env.VITE_BASE_URL_API }/post/create`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'auth-token': JSON.parse(localStorage.getItem('userCredentials')).token,
		},
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(data => data)
		.catch(err => {
			console.error(err);
		});
}

export function postUpdateService(data, id) {
	return fetch(`${ import.meta.env.VITE_BASE_URL_API }/post/${ id }`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'auth-token': JSON.parse(localStorage.getItem('userCredentials')).token,
		},
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(data => data)
		.catch(err => {
			console.error(err);
		});
}

export function postGetAllService() {
	return fetch(`${ import.meta.env.VITE_BASE_URL_API }/posts`)
		.then(res => res.json())
		.then(data => data)
		.catch(err => {
			console.error(err);
		});
}

export function postDeleteService(id) {
	return fetch(`${ import.meta.env.VITE_BASE_URL_API }/post/${ id }`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'auth-token': JSON.parse(localStorage.getItem('userCredentials')).token,
		},
	})
		.then(res => res.json())
		.then(data => data)
		.catch(err => {
			throw new Error(err);
		});
}

export function postGetByIdService(id) {
	return fetch(`${ import.meta.env.VITE_BASE_URL_API }/post/${ id }`)
		.then(res => res.json())
		.then(data => data)
		.catch(err => {
			console.error(err);
		});
}