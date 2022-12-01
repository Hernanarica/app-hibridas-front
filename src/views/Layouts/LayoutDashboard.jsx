import { Sidebar } from '../../components';
import { Outlet } from 'react-router-dom';

export function LayoutDashboard() {
	return (
		<div className="w-full min-h-screen border-4 border-red-600 flex">
			<div className="w-3/12 border-2 border-blue-600">
				<Sidebar />
			</div>
			<div className="w-9/12">
				<Outlet />
			</div>
		</div>
	);
}