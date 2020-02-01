import React from 'react';
import MoleculeBox from '../../components/moleculeBox/moleculeBox';
import MoleculeName from '../../components/moleculeName/moleculeName';
import MoleculeInfo from '../../components/moleculeInfo/moleculeInfo';
import styles from '../../pages/PlugInCompound/PlugInCompound.module.css';

class PlugIn extends React.Component {
    constructor() {
        this.state = { apiResponse: '' };

    }

    callAPI() {
        fetch('http://localhost:2000/getCompound')
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>
                <div className={styles['container']}>
                    <div>
                        <MoleculeBox />
                        <MoleculeName />
                    </div>
                    <div className={styles['mol_info']}>
                        <MoleculeInfo />
                    </div>
                </div>
                <div className={styles['button_div']}>
                    <button> START </button>
                </div>
            </div>
        );
    }
}

export default PlugIn;

