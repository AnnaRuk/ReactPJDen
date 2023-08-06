import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar(): JSX.Element {
    return (
      <nav className={styles.container}>
        <NavLink to="/" className={styles.link}>Home_NavBar</NavLink>
        <NavLink to="product" className={styles.link}>ProductPage_NavBar</NavLink> 
        <NavLink to="products" className={styles.link}>Shop_NavBar</NavLink>
        <NavLink to="users" className={styles.link}>Users_NavBar</NavLink>
        
      </nav>
    );
  }
  