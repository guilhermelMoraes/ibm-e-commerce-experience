import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  useRouteMatch,
  Link,
} from 'react-router-dom';

import ProductGallery from '../../components/product-gallery/product-gallery';
import AddToCart from '../../components/add-to-cart/add-to-cart';
import backIcon from '../../assets/images/icons/back.png';
import styles from './product-detail.module.css';

export default function ProductDetail() {
  const match = useRouteMatch('/product-detail/:id');
  const { id } = match.params;
  
  const [productData, setProductData] = useState({});

  useEffect(() => {
    async function getProductData() {
      try {
        const { data } = await Axios.get(`http://localhost:3001/products/${id}`);
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    }

    getProductData();
  }, [id]);

  const { id:productId, name, description, images } = productData;

  return (
    <div className={styles.productDetailWrapper}>
      <Link to="/" className={styles.backToMainMenu}>
        <img
          src={backIcon}
          alt="Back to the main menu"
        />
        Back
      </Link>
      <div className={styles.flexContainer}>
        <main className={styles.productDescription}>
          <ProductGallery images={images} />
          <section>
            <h1>{name}</h1>
            <p>{description}</p>
          </section>
        </main>
        <AddToCart productId={productId} />
      </div>
    </div>
  );
}