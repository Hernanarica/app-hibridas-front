import { Route, Routes } from 'react-router-dom';
import { Dashboard, Home, LayoutAdmin, Notes, NotFound, PostCrear, PostEditar, UsuarioCrear, UsuarioEditar, Usuarios } from '../../views';
import { routesPathTypes } from '../../types/routesPathTypes.js';
import { LayoutDashboard } from '../../views/Layouts/LayoutDashboard';
import { Post } from '../../views/Dashboard/Post';

export function AdminRouter() {
  return (
    <Routes>
      <Route element={ <LayoutAdmin /> }>
        <Route path={ routesPathTypes.home } element={ <Home /> } />
        <Route path={ routesPathTypes.notes } element={ <Notes /> } />
      </Route>
  
      <Route path="dashboard" element={ <LayoutDashboard /> }>
        <Route index element={ <Dashboard /> } />
    
        <Route path="usuarios">
          <Route index element={ <Usuarios /> } />
          <Route path="crear-usuario" element={ <UsuarioCrear /> } />
          <Route path="editar-usuario" element={ <UsuarioEditar /> } />
          <Route path="eliminar-usuario" element={ <h1>Eliminar usuario, para ID</h1> } />
        </Route>
    
        <Route path="posts">
          <Route index element={ <Post /> } />
          <Route path="crear-post" element={ <PostCrear /> } />
          <Route path="editar-post:id" element={ <PostEditar /> } />
          <Route path="eliminar-post" element={ <h1>Eliminar Posts, pasar ID</h1> } />
        </Route>
  
      </Route>
      
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}