import React from 'react';
import styles from '../navBar/navBar.module.css';

const Navbar = () => (
    <nav className={styles['navbar']}>
        <ul className={styles['navlist']}>
            <li>
                <p>Home</p>
            </li>
            <li>
                <p>Plug in a compound</p>
            </li>
            <li>
                <p>Basic compounds</p>
            </li>
            <h3>
                <p>Logo</p>
            </h3>
        </ul>
    </nav>
)

export default Navbar;
