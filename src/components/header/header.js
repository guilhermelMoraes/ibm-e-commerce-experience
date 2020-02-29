import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

import cartIcon from '../../assets/images/icons/cart.png';
import styles from './header.module.css';

export default function Header() {
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