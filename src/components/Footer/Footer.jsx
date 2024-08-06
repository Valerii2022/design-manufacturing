import css from './Footer.module.css';


const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.textWrapper}>
          <p>Copyright &#169; 2009 - 2022</p>
          <span className={css.separetor}>-</span>
          <p>Design Manufacturing, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
