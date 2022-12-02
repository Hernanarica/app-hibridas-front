import { Route, Routes } from 'react-router-dom';
import { Home, LayoutSubscriptor, Notes, NotFound } from '../../views';
import { routesPathTypes } from '../../types/routesPathTypes.js';

export function SubscriptorRouter() {
  return (
    <Routes>
      <Route element={ <LayoutSubscriptor /> }>
        <Route path={ routesPathTypes.home } element={ <Home /> } />
        <Route path={ routesPathTypes.notes } element={ <Notes /> } />
      </Route>
  
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}