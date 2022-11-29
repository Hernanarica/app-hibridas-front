import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

export function LayoutPublic() {

  return (
    <>
      <Header />
        <main className="min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      <Footer />
    </>
  );
}