import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ChevronLeftIcon } from '@heroicons/react/24/outline/index.js';
import useForm from '../../hooks/useForm.js';
import { PostsContext } from '../../state/context/index.js';

export function PostCreate() {
	const navigate = useNavigate();
	const { addPost } = useContext(PostsContext);
	const { formData: { title, text }, handleInputChange } = useForm({
		title: '',
		text: '',
	});
	
	const handleSubmit = e => {
		e.preventDefault();
		
		addPost({ title, text });
		
		navigate('/dashboard/posts');
		
		toast.success('Post creado', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};
	
	return (
		<div className="p-4">
			<h2 className="text-2xl font-medium">Crea un posts</h2>
			<div className="mt-4">
				<Link
					to="/dashboard/posts"
					className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					<ChevronLeftIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
					Volver
				</Link>
			</div>
			<form
				action="#"
				method="POST"
				onSubmit={ handleSubmit }
			>
				<div className="flex flex-col gap-2 mt-4">
					<label htmlFor="title" className="text-gray-600">Titulo</label>
					<input
						type="text"
						name="title"
						id="title"
						className="rounded"
						value={ title }
						required
						onChange={ handleInputChange }
					/>
				</div>
				<div className="flex flex-col gap-2 mt-4">
					<label htmlFor="text" className="text-gray-600">Texto</label>
					<textarea
						cols="4"
						rows="10"
						name="text"
						id="text"
						required
						className="rounded"
						value={ text }
						onChange={ handleInputChange }
					></textarea>
				</div>
				<button
					type="submit"
					className="bg-indigo-600 text-white w-full py-2 rounded mt-4"
				>Crear</button>
			</form>
		</div>
	);
}