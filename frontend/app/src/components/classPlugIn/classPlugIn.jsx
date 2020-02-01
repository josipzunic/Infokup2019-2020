import React from 'react';
import MoleculeBox from '../../components/moleculeBox/moleculeBox';
import MoleculeName from '../../components/moleculeName/moleculeName';
import MoleculeInfo from '../../components/moleculeInfo/moleculeInfo';
import styles from '../../pages/PlugInCompound/PlugInCompound.module.css';

class PlugIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: '' };
        this.callAPI = this.callAPI.bind(this);

    }

    callAPI() {
        let headers = new Headers();
        
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:2000');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('GET', 'POST', 'OPTIONS');

        fetch('http://localhost:2000/getCompound',
            {
                mode: 'no-cors',
                method: 'GET',
                headers: headers
            })
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    render() {
        return (
            <div>
                <div className={styles['container']}>
                    <div>
                        <MoleculeBox> {this.state.apiResponse} </MoleculeBox>
                        <MoleculeName />
                    </div>
                    <div className={styles['mol_info']}>
                        <MoleculeInfo />
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

