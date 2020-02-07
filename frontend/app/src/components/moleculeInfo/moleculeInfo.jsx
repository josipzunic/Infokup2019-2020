import React from 'react';
import styles from '../moleculeInfo/moleculeInfo.module.css';
import Atribute from '../atribute/atribute';

class MoleculeInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let propResponse = this.props.data;
        propResponse = Object.fromEntries(propResponse);
        return (
            <div>
                <Atribute name='CID' value={propResponse.CID} />
            </div>
        )
    }
}

export default MoleculeInfo;
