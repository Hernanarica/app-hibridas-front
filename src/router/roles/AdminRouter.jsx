import { Route, Routes } from 'react-router-dom';
import { Home, LayoutAdmin, Notes } from '../../views';
import { routesPathTypes } from '../../types/routesPathTypes.js';

export function AdminRouter() {

  return (
    <Routes>
      <Route element={ <LayoutAdmin /> }>
        <Route path={ routesPathTypes.home } element={ <Home /> } />
        <Route path={ routesPathTypes.notes } element={ <Notes /> } />
      </Route>
    </Routes>
  );
}