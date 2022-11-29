import { Routes, Route } from 'react-router-dom';
import { routesPathTypes } from '../types/routesPathTypes';
import { Home, LayoutPublic, Login, Notes, Register } from '../views';

export function AppRouter() {
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
