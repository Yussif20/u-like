import { Header } from '../components';
import { Outlet } from 'react-router-dom';
import { Footer } from '../sections';

export const Layout = () => {
  return (
    <main
      style={{
        background:
          'linear-gradient(90deg, rgba(85, 59, 181, 0.15) 0%, rgba(255, 255, 255, 0.98) 100%)',
      }}
    >
      <Header />
      <div className="min-h-[110vh] pt-40 w-5/6 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
