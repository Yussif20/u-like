import { Header } from '../components';
import { Outlet } from 'react-router-dom';
import { Footer } from '../sections';

export const Layout = () => {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(90deg, rgba(85, 59, 181, 0.15) 0%, rgba(255, 255, 255, 0.98) 100%)',
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
