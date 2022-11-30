import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesPathTypes } from '../types/routesPathTypes';
import { UserContext } from '../state/context';
import { Home, LayoutPublic, Login, Notes, Register } from '../views';

export function AppRouter() {
  const { state } = useContext(UserContext);
  
  if (state.role === 'admin') {
    console.log('Eres admin 😎');
    return <h1>Admin role</h1>
  }
  
  if (state.role === 'user') {
    console.log('Eres user 🤔');
    return <h1>User role</h1>
  }
  
  console.log('Eres un visitante 😏');
  return (
    <>
      <Routes>
        <Route element={ <LayoutPublic /> }>

          <Route path={ routesPathTypes.home } element={ <Home /> } />
          <Route path={ routesPathTypes.notes } element={ <Notes /> } />
          <Route path={ routesPathTypes.login } element={ <Login /> } />
          <Route path={ routesPathTypes.register } element={ <Register /> } />

        </Route>
      </Routes>
    </>
  );
}
