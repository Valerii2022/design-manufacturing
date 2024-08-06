import css from './Home.module.css';
import { NavLink } from 'react-router-dom';
import Slider from 'components/Slider/Slider';

const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>A Little About Design Manufacturing...</h1>
      <p className={css.text}>
        At Design Manufacturing we offer a variety of products like panels, bale
        feeders, and free standing panels. We also take custom orders to fit
        your cattle needs. We are located in Oakes, North Dakota.
      </p>
      <div className={css.mainButton}>
        <NavLink to="/content">
          <button>View Our Product Catalog</button>
        </NavLink>
      </div>
      <div className={css.imageList}>
        <Slider />
      </div>
      <h2 className={css.subtitle}>Do you have a custom job?</h2>
      <p className={css.text}>
        Design Manufacturing, Inc. would be more than happy to hear about the
        custom job you need completed. We have been in this business for years
        and may be able to help you accomplish your goals. If you have a custom
        job, please give us a call at 701-742-4442 or contact us via the contact
        form.
      </p>
      <h2 className={css.subtitle}>
        Have Questions or want to place an order?
      </h2>
      <p className={css.text}>
        If you have any questions or would like to place an order, we would love
        to speak with you. Simply fill out our online contact form or utlize the
        information below to contact us.
      </p>
      <h3 className={css.secondSubtitle}>Design Manufacturing, Inc.</h3>
      <address className={css.address}>
        <p>11128 88th Street SE</p>
        <p className={css.text}>Oakes, ND 58474</p>
      </address>
      <p className={css.text}>Phone: 701-742-4442</p>
    </div>
  );
};

export default Home;
