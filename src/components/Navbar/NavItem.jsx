import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext, UserContext } from '../../state/context';

export function NavItem({ routes }) {
  const { state, logout } = useContext(AuthContext);
  const { clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    clearUser();
    
    navigate('/iniciar-sesion', { replace: true })
  };
  
  return (
    <>
      {
        routes.map(route => (
          <li key={ route.name } className='list-none'>
            <NavLink
              to={ route.path }
              className='text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
            >
              { route.name }
            </NavLink>
          </li>
        ))
      }
      
      { state.isAuthenticated && <button onClick={ handleLogout }>Logout</button> }
    </>
  );
}
