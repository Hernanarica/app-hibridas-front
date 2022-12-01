import { Route, Routes } from 'react-router-dom';
import { Home, LayoutAdmin, Notes } from '../../views';
import { routesPathTypes } from '../../types/routesPathTypes.js';
import { LayoutDashboard } from '../../views/Layouts/LayoutDashboard';

export function AdminRouter() {

  return (
    <Routes>
      <Route element={ <LayoutAdmin /> }>
        <Route path={ routesPathTypes.home } element={ <Home /> } />
        <Route path={ routesPathTypes.notes } element={ <Notes /> } />
      </Route>
  
      <Route path="dashboard" element={ <LayoutDashboard /> }>
        <Route index element={ <h1>Dashboard</h1> } />
    
        <Route path="usuarios">
          <Route index element={ <h1>usuarios</h1> } />
        </Route>
    
        <Route path="posts">
          <Route index element={ <h1>Posts</h1> } />
          <Route path="crear-post" element={ <h1>Crear Posts</h1> } />
          <Route path="editar-post" element={ <h1>Editar Posts</h1> } />
          <Route path="eliminar-post" element={ <h1>Eliminar Posts</h1> } />
        </Route>
  
      </Route>
    </Routes>
  );
}