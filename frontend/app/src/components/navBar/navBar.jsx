import React from 'react';
import styles from '../navBar/navBar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className={styles['navbar']}>
        <ul className={styles['navlist']}>
            <li>
                <Link className={styles['app_link']} to='/'> Home </Link>
            </li>
            <li>
                <Link className={styles['app_link']} to='/PlugInCompound'> Plug in a molecule </Link>
            </li>
            <li>
                <Link className={styles['app_link']} to='/BasicCompounds'> Basic molecules </Link>
            </li>
            <h3>
                Logo
            </h3>
        </ul>
    </nav>
)

export default Navbar;
