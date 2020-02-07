import React from 'react';
import styles from '../moleculeBox/moleculeBox.module.css';

class MoleculeBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            partOneLink: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=',
            partTwoLink: '&t=l'
        };
    }
    render () {
        return <div className={styles['molecule_box']}>
            <img alt= '2D molecule structure' src={`${this.state.partOneLink}${this.props.cid}${this.state.partTwoLink}`} className={styles['molecule_image']} />
        </div>
    }
};

export default MoleculeBox;
