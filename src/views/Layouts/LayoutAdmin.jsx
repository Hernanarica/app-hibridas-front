import { Footer } from '../../components/index.js';
import { Outlet } from 'react-router-dom';
import { HeaderAdmin } from '../../components/Headers/HeaderAdmin';

export function LayoutAdmin() {

  return (
    <>
      <HeaderAdmin />
      <main className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}