import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './product-gallery.module.css';

export default function ProductGallery(props) {
  const { images } = props;

  const [gallery, setGallery] = useState([]);
  const [mainPictureIndex, setMainPictureIndex] = useState(0);

  useEffect(() => {
    setGallery(images || []);
  }, [images]);


  return (
    <figure className={`${styles.productGallery} ${gallery.length === 1 ? '' : styles.grid}`}>
      <div className={styles.thumbnails}>
        {gallery.length > 1 && gallery.map((picture, index) => (
          <img
            key={index}
            src={picture.url}
            alt="Product"
            onClick={() => setMainPictureIndex(index)}
          />
        ))}
      </div>
      {gallery.length > 0 && (
        <img src={gallery[mainPictureIndex].url} alt="Product" />
      )}
    </figure>
  );
}

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
  })),
};
