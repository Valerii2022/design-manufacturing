import { products } from '../../image/products';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import css from './Slider.module.css';
import { logo } from '../../image/logo';

const images = [
  {
    original: products.shop,
    alt: 'Shop',
  },
  {
    original: products.bale,
    alt: 'Bale Feeders',
  },
  {
    original: products.post1,
    alt: 'Posts',
  },
  {
    original: products.cone,
    alt: 'Hopper Cone',
  },
  {
    original: products.bunk2,
    alt: 'Bunk',
  },

  {
    original: products.feed,
    alt: 'Feed Through Panel',
  },
  {
    original: products.free4,
    alt: 'Freestanding Panels',
  },
];

const Slider = ({ slides }) => {
  return (
    <div className={css.container}>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        autoPlay={true}
        showPlayButton={false}
        slideInterval={4000}
        renderLeftNav={(onClick, disabled) => (
          <img
            className={css.leftNav}
            src={logo.leftArrow}
            alt="slider"
            onClick={onClick}
            disabled={disabled}
          />
        )}
        renderRightNav={(onClick, disabled) => (
          <img
            className={css.rightNav}
            src={logo.rightArrow}
            alt="slider"
            onClick={onClick}
            disabled={disabled}
          />
        )}
      />
    </div>
  );
};

export default Slider;
