import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './product-card.module.css';

export default function ProductCard(props) {
  const { id, name, images } = props;

  return (
    <Link to={`/product-detail/${id}`} className={styles.productLink}>
      <article>
        <figure>
          <img
            src={images[0].url}
            alt="Product cover. Click to see more"
            className={styles.coverImg}
          />
          <figcaption className={styles.productDescription}>
            <p>{name}</p>
            <span className={styles.viewButton}>
              View
            </span>
          </figcaption>
        </figure>
      </article>
    </Link>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
}
