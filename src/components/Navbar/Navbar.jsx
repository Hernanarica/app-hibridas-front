import { NavItem } from './NavItem';
import { navUserRoutes } from './router';

export function Navbar() {
  return <NavItem routes={ navUserRoutes } />
}
