import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline/index.js';
import { deleteUserService, getAllUsersService } from '../../services';

export function Users() {
	const [ users, setUsers ] = useState([]);
	
	useEffect(() => {
		getAllUsersService().then(res => {
			setUsers(res);
		});
	}, []);
	
	const handleDeleteUser = (id) => {
		deleteUserService(id).then(res => {
			setUsers(oldState => oldState.filter(user => user._id !== id));
			
			toast.success('Usuario eliminado', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		});
	};
	
	if (users.length === 0) {
		return <h1>Loading...</h1>
	}
	
	return (
		<div className="px-4 sm:px-6 lg:p-8">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-xl font-semibold text-gray-900">Panel de usuarios</h1>
					<p className="mt-2 text-sm text-gray-700">Desde este panel podrás administrar todos los usuarios del blog</p>
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
											Nombre
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
											Lastname
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
											Email
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
											Rol
										</th>
										<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
											<span className="sr-only">Eliminar</span>
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 bg-white">
									{users.map((user) => (
										<tr key={user._id}>
											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
												{user.name}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.lastname}</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.email}</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.role}</td>
											<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
												<button
													className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
													onClick={ () => handleDeleteUser(user._id) }
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