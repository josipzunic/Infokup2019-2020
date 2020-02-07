import React from 'react';
import styles from '../navBar/navBar.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

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
                <img src={Logo} alt='' />
            </li>
        </ul>
    </nav>
)

export default Navbar;
