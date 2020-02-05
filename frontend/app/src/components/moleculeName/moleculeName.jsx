import React from 'react';
import styles from '../moleculeName/moleculeName.module.css';

class MoleculeName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let propResponse = this.props.data;
        propResponse = Object.fromEntries(propResponse);

        return (
            <div className={styles['molecule_name']}>
                <br /><b>IUPAC Name:     </b>{propResponse.IUPACName}<br />
            </div>
        )
    }
}
export default MoleculeName;
