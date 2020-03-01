import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Helmet from 'react-helmet';

import ibmLogo from '../../assets/images/ibm-logo.png';
import styles from './homepage.module.css';
import ProductCard from '../../components/product-card/product-card';

export default function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const { data } = await Axios.get('http://localhost:3001/products');
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, [])

  return (
    <>
      <Helmet>
        <title>Homepage | IBM E-COMMERCE EXPERIENCE</title>
      </Helmet>
      <section id={styles.topSection}>
        <img
          src={ibmLogo}
          alt="IBM logo"
          id={styles.ibmLogo}
        />
        <div id={styles.intro}>
          <h1>
            E-Commerce test
          </h1>
          <p>
            The easiest way to shop IBM merchandise items. Simply choose what you want and we'll work with
            vendors to have your order delivered as soon as possible.
          </p>
        </div>
      </section>
      <hr style={{ border: '1px solid #0863fe' }} />
      <main id={styles.productsWrapper}>
        <h2 id={styles.productsForQuotation}>
          Merchandise products available for quotation
        </h2>
        <div id={styles.gridContainer}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              images={product.images}
            />
          ))}
        </div>
      </main>
    </>
  );
}