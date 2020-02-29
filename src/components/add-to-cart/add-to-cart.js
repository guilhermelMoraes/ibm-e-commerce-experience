import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import styles from './add-to-cart.module.css';

export default function AddToCart(props) {
  const { productId:id } = props;

  const [quantity, setQuantity] = useState('');
  const [productOrdered, setProductOrdered] = useState(false);

  async function sendToCart(event) {
    event.preventDefault();

    const payload = {
      id,
      quantity: parseFloat(quantity),
    };

    try {
      const { status } = await Axios.post('http://localhost:3001/cart', payload);
      status === 201 && setProductOrdered(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function verifyUserCart() {
      try {
        const { data } = await Axios.get('http://localhost:3001/cart');
        const ids = data.map((products) => products.id);
        setProductOrdered(() => ids.includes(id));
      } catch (error) {
        console.error(error);
      }
    }

    verifyUserCart();
  }, [id]);

  return (
    <aside className={styles.addToCart}>
      <h3>
        This product can be shipped worldwide
      </h3>
      <form>
        <label htmlFor="quantity-input" id={styles.quantityLabel}>
          <span>Quantity</span>
          <input
            type="number"
            id="quantity-input"
            value={quantity}
            readOnly={productOrdered}
            min="0"
            onChange={(event) => setQuantity(event.target.value)}
          />
        </label>
        <p className={styles.howToAddExplanation}>
          Add products to the shopping cart to request a quotation. If you need a product in a different
          color or size, add it separately
        </p>
        {productOrdered ?
          <p>Product in the cart already</p>
        :
          <button
            type="submit"
            onClick={(event) => sendToCart(event)}
            disabled={quantity === 0 || quantity === ''}
          >
            Add to cart
          </button>
        }
      </form>
    </aside>
  );
}

AddToCart.propTypes = {
  productId: PropTypes.string,
};
