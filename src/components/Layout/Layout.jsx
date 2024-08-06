import css from './Layout.module.css';
import { Suspense, createContext } from 'react';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from 'components/Sidebar/Sidebar';

export const FilterContext = createContext('');

const Layout = () => {
  return (
    <div className={css.container}>
      <div className={css.headerWrap}>
        <Header />
      </div>
      <main className={css.content}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <Sidebar />
      </main>
      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
