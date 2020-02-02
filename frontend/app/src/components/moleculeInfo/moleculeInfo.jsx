import React from 'react';
import styles from '../moleculeInfo/moleculeInfo.module.css';

class MoleculeInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={styles['molecule_info']}>
                <div className={styles['text']}>
                    {this.props.res.apiResponse}
                </div>
            </div>
        )
    }
}

export default MoleculeInfo;
