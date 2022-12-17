import { Route, Routes } from 'react-router-dom';
import { Dashboard, Home, LayoutAdmin, Notes, NotFound, PostCreate, PostEdit, UserCreate, UserEdit, Users, NoteDetail } from '../../views';
import { routesPathTypes } from '../../types/routesPathTypes.js';
import { LayoutDashboard } from '../../views/Layouts/LayoutDashboard';
import { Post } from '../../views/Dashboard/Post';
import { CommentsProvider } from '../../providers/CommentsProvider';

export function AdminRouter() {
  return (
    <Routes>
      <Route element={ <LayoutAdmin /> }>
        <Route path={ routesPathTypes.home } element={ <Home /> } />
        <Route path={ routesPathTypes.notes } element={ <Notes /> } />
        <Route path="/post/detalle/:id" element={
          <CommentsProvider>
            <NoteDetail />
          </CommentsProvider>
        } />
      </Route>

      <Route path="dashboard" element={ <LayoutDashboard /> }>
        <Route index element={ <Dashboard /> } />

        <Route path="usuarios">
          <Route index element={ <Users /> } />
          <Route path="crear-usuario" element={ <UserCreate /> } />
          <Route path="editar-usuario" element={ <UserEdit /> } />
          <Route path="eliminar-usuario" element={ <h1>Eliminar usuario, para ID</h1> } />
        </Route>

        <Route path="posts">
          <Route index element={ <Post /> } />
          <Route path="crear-post" element={ <PostCreate /> } />
          <Route path="editar-post:id" element={ <PostEdit /> } />
          <Route path="eliminar-post" element={ <h1>Eliminar Posts, pasar ID</h1> } />
        </Route>

      </Route>

      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}