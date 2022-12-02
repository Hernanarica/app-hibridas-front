import { Link } from 'react-router-dom';
import { ArrowUturnLeftIcon, BookOpenIcon, Squares2X2Icon, UserGroupIcon } from '@heroicons/react/24/outline/index.js';

export function Sidebar() {
	return (
		<aside className="p-2 flex flex-col justify-between h-full">
			<div className="">
				<ul className="space-y-3">
					<li className="group">
						<Link to="/dashboard" className="p-2 inline-flex w-full gap-2 items-center text-gray-600 group-hover:text-gray-900">
							<Squares2X2Icon className="h-5 w-5" />
							<span>
								Dashboard
							</span>
						</Link>
					</li>
					<li className="group">
						<Link to="usuarios" className="p-2 inline-flex w-full gap-2 items-center text-gray-600 group-hover:text-gray-900">
							<UserGroupIcon className="h-5 w-5" />
							<span>
								Usuarios
							</span>
						</Link>
					</li>
					<li className="group">
						<Link to="posts" className="p-2 inline-flex w-full gap-2 items-center text-gray-600 group-hover:text-gray-900">
							<BookOpenIcon className="h-5 w-5" />
							<span>
								Posts
							</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="group">
				<Link to="/" className="p-2 inline-flex w-full gap-2 items-center text-gray-600 group-hover:text-gray-900">
					<ArrowUturnLeftIcon className="h-5 w-5" />
					<span>
						Volver al blog
					</span>
				</Link>
			</div>
		</aside>
	);
}