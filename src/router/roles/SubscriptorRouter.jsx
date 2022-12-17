import { Route, Routes } from 'react-router-dom';
import { Home, LayoutSubscriptor, NoteDetail, Notes, NotFound } from '../../views';
import { routesPathTypes } from '../../types/routesPathTypes.js';
import { CommentsProvider } from '../../providers/CommentsProvider';

export function SubscriptorRouter() {
  return (
    <Routes>
      <Route element={ <LayoutSubscriptor /> }>
        <Route path={ routesPathTypes.home } element={ <Home /> } />
        <Route path={ routesPathTypes.notes } element={ <Notes /> } />
        <Route path="/post/detalle/:id" element={
          <CommentsProvider>
            <NoteDetail />
          </CommentsProvider>
        } />
      </Route>

      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}