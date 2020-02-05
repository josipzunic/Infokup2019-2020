import React from 'react';
import styles from '../moleculeInfo/moleculeInfo.module.css';

class MoleculeInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let propResponse = this.props.data;
        propResponse = Object.fromEntries(propResponse);
        //propResponse.apiResponse = Object.fromEntries(propResponse.apiResponse);
        console.log(propResponse);
        return (
            <div className={styles['molecule_info']}>
                <b>CID:     </b>{propResponse.CID}<br /><br />
                <b>Exact MAss:     </b>{propResponse.ExactMass}<br /><br />
                <b>Molecular Formula:     </b>{propResponse.MolecularFormula}<br /><br />
            </div>
        )
    }
}

export default MoleculeInfo;
