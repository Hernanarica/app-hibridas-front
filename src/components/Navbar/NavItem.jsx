import { NavLink } from 'react-router-dom';
import { navRoutes } from './router/NavRoutes';

export function NavItem() {
  return (
    <>
      {
        navRoutes.map(item => (
          <li key={ item.name } className='list-none'>
            <NavLink
              to={ item.path }
              className='text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
            >
              { item.name }
            </NavLink>
          </li>
        ))
      }
    </>
  );
}
