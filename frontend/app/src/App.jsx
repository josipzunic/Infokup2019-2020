import React from 'react';
import Navbar from './components/navBar/navBar';
import styles from './app.module.css';

const App = () => (
    <div>
        <Navbar />
        <div className={styles['directions']}>
            
        </div>
    </div>
);

export default App;
