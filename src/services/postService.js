export function postCreateService(data) {
	return fetch(`${ import.meta.env.VITE_BASE_URL_API }/post/create`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then(res => res.json())
		.then(data => data)
		.catch(err => {
			console.error(err);
		});
}