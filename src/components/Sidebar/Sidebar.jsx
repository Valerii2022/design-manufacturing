import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FilterContext } from 'context/FilterContext';
import css from './Sidebar.module.css';
import ContactForm from 'components/Form/Form';

const Sidebar = () => {
  const { setFilter } = useContext(FilterContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleProductsLinksClick = e => {
    setFilter(e.target.id);
    navigate('/content');
  };

  useEffect(() => {
    if (!location.pathname.includes('content')) {
      const radios = document.querySelectorAll(
        'input[type="radio"][name="products"]'
      );
      radios.forEach(radio => {
        radio.checked = false;
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    const viewAllRadio = document.querySelector('#View\\ All');
    if (viewAllRadio && location.pathname.includes('content')) {
      viewAllRadio.checked = true;
      setFilter('View All');
    }
  }, [location.pathname, setFilter]);

  return (
    <aside className={css.sidebar}>
      <div className={css.catalog}>
        <h2 className={css.title}>Product Quick Find...</h2>
        <ul className={css.linkWrapper} onClick={handleProductsLinksClick}>
          <li className={css.linkItem}>
            <input
              id="View All"
              type="radio"
              name="products"
              className={css.radioBtn}
            />
            <label htmlFor="View All" className={css.link}>
              View All
            </label>
          </li>
          <li className={css.linkItem}>
            <input
              id="Feed Bunks & Bale Feeders"
              type="radio"
              name="products"
              className={css.radioBtn}
            />
            <label htmlFor="Feed Bunks & Bale Feeders" className={css.link}>
              Feed Bunks & Bale Feeders
            </label>
          </li>
          <li className={css.linkItem}>
            <input
              id="Feed Through Panels"
              type="radio"
              name="products"
              className={css.radioBtn}
            />
            <label htmlFor="Feed Through Panels" className={css.link}>
              Feed Through Panels
            </label>
          </li>
          <li className={css.linkItem}>
            <input
              id="Sucker Rod Panels & Gates"
              type="radio"
              name="products"
              className={css.radioBtn}
            />
            <label htmlFor="Sucker Rod Panels & Gates" className={css.link}>
              Sucker Rod Panels & Gates
            </label>
          </li>
          <li className={css.linkItem}>
            <input
              id="Freestand Panels & Windbreak"
              type="radio"
              name="products"
              className={css.radioBtn}
            />
            <label htmlFor="Freestand Panels & Windbreak" className={css.link}>
              Freestand Panels & Windbreak
            </label>
          </li>
          <li className={css.linkItem}>
            <input
              id="Pipe, Sucker Rods, & Posts"
              type="radio"
              name="products"
              className={css.radioBtn}
            />
            <label htmlFor="Pipe, Sucker Rods, & Posts" className={css.link}>
              Pipe, Sucker Rods, & Posts
            </label>
          </li>
          <li className={css.linkItem}>
            <input
              id="Calf Shelter & Hopper Cones"
              type="radio"
              name="products"
              className={css.radioBtn}
            />
            <label htmlFor="Calf Shelter & Hopper Cones" className={css.link}>
              Calf Shelter & Hopper Cones
            </label>
          </li>
          <li className={css.linkItem}>
            <input
              id="Calf Catcher"
              type="radio"
              name="products"
              className={css.radioBtn}
            />
            <label htmlFor="Calf Catcher" className={css.link}>
              Calf Catcher
            </label>
          </li>
        </ul>
      </div>
      <div className={css.formWrapper}>
        <h2 className={css.title}>Contact Us</h2>
        <p className={css.text}>
          Simply fill out and submit the form below to send us an email.{' '}
          <span>All fields are required.</span>
        </p>
        <ContactForm />
      </div>
    </aside>
  );
};

export default Sidebar;
