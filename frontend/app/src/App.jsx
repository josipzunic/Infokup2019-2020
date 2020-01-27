import React from 'react';
import Navbar from './components/navBar/navBar';
import MoleculeBox from './components/moleculeBox/moleculeBox';
import MoleculeName from './components/moleculeName/moleculeName';
import MoleculeInfo from './components/moleculeInfo/moleculeInfo';
import styles from './app.module.css'


const App = () => (
    <div>
        <Navbar />
        <div className={styles['container']}>
            <div>
                <MoleculeBox />
                <MoleculeName />
            </div>
            <div className={styles['mol_info']}>
                <MoleculeInfo />
            </div>
        </div>
    </div>
);

export default App;