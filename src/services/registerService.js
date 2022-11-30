export function registerService(userData) {
  return fetch(`${ import.meta.env.VITE_BASE_URL_API }/user/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      console.error(err);
    });
}