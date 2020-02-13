import React from 'react';
import styles from '../moleculeBox/moleculeBox.module.css';
import img from './background_molecule.png';
class MoleculeBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            partOneLink: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=',
            partTwoLink: '&t=l'
        };
    }
    render () {
        let link = img;
        if(isNaN(this.props.cid) === false)
            link = `${this.state.partOneLink}${this.props.cid}${this.state.partTwoLink}`

        return (
        <div className={styles['molecule_box']}>
            <img src={link} className={styles['molecule_image']} alt='' />
        </div>
        );
    }
};

export default MoleculeBox;
