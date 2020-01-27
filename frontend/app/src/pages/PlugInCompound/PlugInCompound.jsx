import React from 'react';
import styles from '../PlugInCompound/PlugInCompound.module.css';
import Navbar from '../../components/navBar/navBar';
import MoleculeBox from '../../components/moleculeBox/moleculeBox';
import MoleculeName from '../../components/moleculeName/moleculeName';
import MoleculeInfo from '../../components/moleculeInfo/moleculeInfo';

const PlugInCompound = () => (
    <div className={styles['plug_in']}> 
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

export default PlugInCompound;