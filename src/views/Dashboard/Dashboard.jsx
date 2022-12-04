import { useEffect, useState } from 'react';

// const endpoints = [
// 	`${ import.meta.env.VITE_BASE_URL_API }/posts`,
// 	`${ import.meta.env.VITE_BASE_URL_API }/user/users`
// ];

export function Dashboard() {
	const [ blogStats, setBlogStats ] = useState({
		posts: 0,
		users: 0,
		comments: 0
	});
	
	
	useEffect(() => {
		getBlogStats().then(res => {
			setBlogStats({
				...blogStats,
				users: res.users.length,
				posts: res.posts.length,
			})
		});
	}, []);
	
	const getBlogStats = async () => {
		const fetchUserResponse = await fetch(`${ import.meta.env.VITE_BASE_URL_API }/user/users`);
		const users = await fetchUserResponse.json();
		const fetchPostsResponse = await fetch(`${ import.meta.env.VITE_BASE_URL_API }/posts`);
		const posts = await fetchPostsResponse.json();
	
		return { users, posts };
		// Promise.all(endpoints.map(async endpoint => {
		// 	console.log(endpoint);
		// 	const fetchResponse = await fetch(endpoint);
		// 	return await fetchResponse.json();
		// })).then(r => {
		// 	console.log(r);
		// });
	}
	
	const { posts, users, comments } = blogStats
	
	return (
		<div className="bg-gray-50 pt-12 sm:pt-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Estadísticas
					</h2>
					<p className="mt-3 text-xl text-gray-500 sm:mt-4">
						Estadísticas generales del blog.
					</p>
				</div>
			</div>
			<div className="mt-10 bg-white pb-12 sm:pb-16">
				<div className="relative">
					<div className="absolute inset-0 h-1/2 bg-gray-50" />
					<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-4xl">
							<dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
								<div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
									<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Usuarios</dt>
									<dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">{ users }</dd>
								</div>
								<div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
									<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Posts</dt>
									<dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">{ posts }</dd>
								</div>
								<div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
									<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Comentarios</dt>
									<dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">{ comments }</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}