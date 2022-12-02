import { Sidebar } from '../../components';
import { Outlet } from 'react-router-dom';

export function LayoutDashboard() {
	return (
		<div className="w-full min-h-screen flex">
			<div className="w-3/12">
				<Sidebar />
			</div>
			<div className="w-9/12">
				<Outlet />
			</div>
		</div>
	);
}