import React, { useEffect, useState } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import Axios from 'axios';

import cartIcon from '../../assets/images/icons/cart.png';
import styles from './header.module.css';

export default function Header() {
  const [cartLength, setCartLength] = useState(null);

  useEffect(() => {
    async function getCartLength() {
      try {
        const { data } = await Axios.get('http://localhost:3001/cart');
        setCartLength(data.length === 0 ? null : data.length);
      } catch (error) {
        console.log(error);
      }
    }

    getCartLength();
  }, []);

  return (
    <header id={styles.defaultHeader}>
      <nav>
        <ul id={styles.navLinks}>
          <li>
            <NavLink to="/" className={styles.navLink}>
              E-commerce test
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={styles.navLink}
              id={styles.cartLink}
            >
              {cartLength && (
                <div id={styles.cartLength}>
                  {cartLength}
                </div>
              )}
              <img
                src={cartIcon}
                alt="Go to Cart"
                id={styles.cartIcon}
              />
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}