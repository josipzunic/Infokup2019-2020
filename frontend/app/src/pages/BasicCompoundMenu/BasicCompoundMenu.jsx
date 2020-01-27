import React from 'react';
import Navbar from '../../components/navBar/navBar';
import styles from '../BasicCompoundMenu/BasicCompoundMenu.module.css';

const BasicCompounds = () => (
    <div>
        <Navbar />
        <div className={styles['basic_menu']}>
            MYB ZA DRZAVNO
        </div>
    </div>
);

export default BasicCompounds;