import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesPathTypes } from '../types/routesPathTypes';
import { UserContext } from '../state/context';
import { Home, LayoutPublic, Login, NoteDetail, Notes, NotFound, Register } from '../views';
import { AdminRouter, SubscriptorRouter } from './roles';
import { CommentsProvider } from '../providers/CommentsProvider';

export function AppRouter() {
  const { state } = useContext(UserContext);

  if (state.role === 'admin') {
    console.log('Eres admin 😎');
    return <AdminRouter />;
  }

  if (state.role === 'user') {
    console.log('Eres user 🤔');
    return <SubscriptorRouter />;
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
          <Route path="/post/detalle/:id" element={
            <CommentsProvider>
              <NoteDetail />
            </CommentsProvider>
           } />

        </Route>

        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}
