import css from './Layout.module.css';
import { Suspense, createContext, useEffect, useState } from 'react';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from 'components/Sidebar/Sidebar';
import { scrollToTop } from 'helpers/scrollToTop';

export const FilterContext = createContext('');

const Layout = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      {showScrollBtn && (
        <button
          className={css.scrollBtn}
          type="button"
          onClick={() => scrollToTop()}
        >
          <span className={css.arrow}></span>
        </button>
      )}
    </div>
  );
};

export default Layout;
