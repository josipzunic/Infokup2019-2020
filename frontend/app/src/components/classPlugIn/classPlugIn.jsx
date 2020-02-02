import React from 'react';
import MoleculeBox from '../../components/moleculeBox/moleculeBox';
import MoleculeName from '../../components/moleculeName/moleculeName';
import MoleculeInfo from '../../components/moleculeInfo/moleculeInfo';
import styles from '../../pages/PlugInCompound/PlugInCompound.module.css';

class PlugIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: '', 
        };
        this.callAPI = this.callAPI.bind(this);

    }

    callAPI() {
        fetch('http://localhost:2000/getCompound')
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    render() {
        const data = this.state.apiResponse;
        const res = {
            apiResponse: data,
        }
        return (
            <div>
                <div className={styles['container']}>
                    <div>
                        <MoleculeBox />
                        <MoleculeName />
                    </div>
                    <div className={styles['mol_info']}>
                        <MoleculeInfo res={res}/>
                    </div>
                </div>
                <div className={styles['button_div']}>
                    <button onClick={this.callAPI}> START </button>
                </div>
            </div>
        );
    }
}

export default PlugIn;

