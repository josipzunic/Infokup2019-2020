import React from 'react';
import styles from '../moleculeInfo/moleculeInfo.module.css';
import Atribute from '../atribute/atribute';
import FirstAtribute from '../atribute/firstAtribute';

class MoleculeInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let propResponse = this.props.data;
        propResponse = Object.fromEntries(propResponse);
        return (
            <div className={styles['molecule_info']}>
                <FirstAtribute name='CID' value={propResponse.CID} />
                <Atribute name='Exact Mass' value={propResponse.ExactMass} />
                <Atribute name='Molecular Formula' value={propResponse.MolecularFormula} />
                <Atribute name='Lorem Ipsum' value='Lorem Ipsum' />
                <Atribute name='Lorem Ipsum' value='Lorem Ipsum' />
                <Atribute name='Lorem Ipsum' value='Lorem Ipsum' />
            </div>
        )
    }
}

export default MoleculeInfo;
