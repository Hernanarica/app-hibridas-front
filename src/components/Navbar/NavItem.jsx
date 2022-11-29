import { NavLink } from 'react-router-dom';
import { navRoutes } from './router/NavRoutes';
import { useContext } from 'react';
import { AuthContext, UserContext } from '../../state/context/index.js';

export function NavItem() {
  const { state, logout } = useContext(AuthContext);
  const { clearUser } = useContext(UserContext);
  
  const handleLogout = () => {
    logout();
    clearUser();
  };
  
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
  
      { state.isAuthenticated && <button onClick={ handleLogout }>Logout</button> }
    </>
  );
}
