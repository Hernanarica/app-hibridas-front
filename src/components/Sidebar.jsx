import { Link } from 'react-router-dom';

export function Sidebar() {
	return (
		<aside>
			<div>
				<ul>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link to="usuarios">Usuarios</Link>
					</li>
					<li>
						<Link to="posts">Posts</Link>
					</li>
				</ul>
			</div>
			<div>
				<Link to="/">Volver al Blog</Link>
			</div>
		</aside>
	);
}