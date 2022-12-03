import { Link } from 'react-router-dom';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline/index.js';
import { useEffect, useState } from 'react';
import { postDeleteService, postGetAllService } from '../../services';

const people = [
	{ name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
]

export function Post() {
	const [ posts, setPosts ] = useState([]);
	
	useEffect(() => {
		postGetAllService().then(data => {
			setPosts(data)
		}).catch(err => {
			throw new Error(err);
		})
	}, []);
	
	const handleDeletePost = (id) => {
		postDeleteService(id).then(r => {
			console.log(r);
		}).catch(err => {
			throw new Error(err);
		})
	}
	
	return (
		<div className="px-4 sm:px-6 lg:p-8">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-xl font-semibold text-gray-900">Panel de posts</h1>
					<p className="mt-2 text-sm text-gray-700">Desde este panel podrás administrar todos los posts del blog</p>
				</div>
				<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
					<Link
						to="crear-post"
						className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						<PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
						Agregar
					</Link>
				</div>
			</div>
			<div className="mt-8 flex flex-col">
				<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
							<table className="min-w-full divide-y divide-gray-300">
								<thead className="bg-gray-50">
									<tr>
										<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
											Titulo
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
											Fecha de creacion
										</th>
										<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
											<span className="sr-only">Editar</span>
										</th>
										<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
											<span className="sr-only">Eliminar</span>
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 bg-white">
									{posts.map(post => (
										<tr key={post._id}>
											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
												{post.title}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{post.created}</td>
											<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
												<Link
													to={ `editar-post${ post._id }` }
													className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
												>
													<PencilIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
													Editar
												</Link>
											</td>
											<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
												<button
													className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
													onClick={ () => handleDeletePost(post._id) }
												>
													<TrashIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
													Eliminar
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}