import { forwardRef } from 'react';
import { useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';
const Image = forwardRef(({ src, alt, className, fallback, ...props }, ref) => {
  const [fallBack, setFallBack] = useState('');

  const handleError = () => {
    setFallBack(fallBack ? images.noImage : fallback);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallBack || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
