import React from 'react';
import Navbar from './components/navBar/navBar';
import styles from './app.module.css';

const App = () => (
    <div>
        <Navbar />
        <div className={styles['directions']}>
            KAKO APLIKACIJA RADI
        </div>
    </div>
);

export default App;