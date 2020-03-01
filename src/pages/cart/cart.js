import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { DatePicker, DatePickerInput } from 'carbon-components-react';
import Helmet from 'react-helmet';

import styles from './cart.module.css';
import backIcon from '../../assets/images/icons/back.png';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getCartLength() {
      try {
        const { data } = await Axios.get('http://localhost:3001/cart');
        setCart(data);
      } catch (error) {
        console.error(error);
      }
    }

    getCartLength();
  }, []);

  async function removeProductFromCart(productId) {
    try {
      const { status } = await Axios.delete(`http://localhost:3001/cart/${productId}`);

      if (status === 200) {
        setCart((previousState) => {
          const products = previousState.filter((product) => product.id !== productId);
          return products;
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Helmet>
        <title>Cart | IBM E-COMMERCE EXPERIENCE</title>
      </Helmet>
      <div id={styles.pageWrapper}>
        <Link to="/" className="back-to-homepage">
          <img
            src={backIcon}
            alt="Back to the main menu"
          />
          Back
        </Link>
        <h1 id={styles.title}>
          Shopping Cart
        </h1>
        <h4>{`${cart.length} items`}</h4>
        <section id={styles.cartContainer}>
          <main>
            <ul id={styles.productList}>
              {cart.map((product) => (
                <li key={product.id} className={styles.productsListItem}>
                  <img src={product.images[0].url} alt="" />
                  <div className={styles.productInfos}>
                    <div className={styles.row}>
                      <h4>{product.name}</h4>
                      <button
                        type="button"
                        className={styles.removeButton}
                        onClick={() => removeProductFromCart(product.id)}
                      >
                        Remove
                      </button>
                    </div>
                    <form className={styles.shopOptions}>
                      <label className={styles.quantityInput}>
                        <span style={{ fontSize: '12px', marginBottom: 8 }}>
                          Quantity
                        </span>
                        <input
                          type="number"
                          value={product.quantity}
                          onChange={(event) => parseFloat(event.target.value)}
                        />
                      </label>
                      <DatePicker
                        dateFormat="m/d/Y"
                        datePickerType="single"
                        id="date-picker"
                        light={false}
                        locale="en"
                        short={false}
                      >
                        <DatePickerInput
                          disabled={false}
                          iconDescription="Calendar icon"
                          id="date-picker-input-id"
                          invalid={false}
                          labelText="Desired due date*"
                          pattern="d{1,2}/d{4}"
                          placeholder="mm/dd/yyyy"
                          type="text"
                        />
                      </DatePicker>
                    </form>
                  </div>
                </li>
              ))}
            </ul>
          </main>
          <aside id={styles.buyProducts}>
            <h2 style={{ marginBottom: 20 }}>
              Subtotal: {cart.length} items
            </h2>
            <button
              type="submit"
              onClick={(event) => event.preventDefault()}
            >
              Place order
            </button>
            <Link to="/" id={styles.continueShopping}>
              Continue shopping
            </Link>
            <p>
              By placing your order, you agree to{' '}
              <a
                href="https://www-03.ibm.com/procurement/proweb.nsf/contentdocsbytitle/United+States~Policies+and+procedures"
                rel="noopener noreferrer"
                target="_blank"
              >
                the IBM purchase policies
              </a> and{' '}
              <a
                href="https://www.ibm.com/ibm/responsibility/policy7.shtml"
                rel="noopener noreferrer"
                target="_blank"
              >
                IBM's personal information policies.
              </a>
            </p>
          </aside>
        </section>
        <hr style={{ border: '1px solid #0863fe' }} />
      </div>
    </>
  );
}