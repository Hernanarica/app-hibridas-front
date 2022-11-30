import { NavItem } from './NavItem.jsx';
import { navAdminRoutes } from './router';

export function NavbarAdmin() {
	return <NavItem routes={ navAdminRoutes } />;
}