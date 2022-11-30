import { Outlet } from 'react-router-dom';
import { Footer, HeaderSubscriptor } from '../../components';

export function LayoutSubscriptor() {

  return (
    <>
      <HeaderSubscriptor />
      <main className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}