import { Routes, Route } from 'react-router-dom';
import { routesPathTypes } from '../types/routesPathTypes';
import { Home } from '../views';
import { Header, Footer } from '../components';

export function AppRouter() {
  return (
    <>
      <Header />

      <Routes>
        <Route path={ routesPathTypes.home } element={ <Home /> } />
        <Route path={ routesPathTypes.notes } element={<h1>Notas</h1>} />
        <Route path={ routesPathTypes.signin } element={<h1>Iniciar sesion</h1>} />
        <Route path={ routesPathTypes.signup } element={<h1>Registrate</h1>} />
      </Routes>

      <Footer />
    </>
  );
}
