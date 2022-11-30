export function loginService(userData) {
  return fetch(`${ import.meta.env.VITE_BASE_URL_API }/user/auth`, {
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
