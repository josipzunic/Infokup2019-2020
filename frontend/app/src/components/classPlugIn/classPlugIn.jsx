import React from 'react';
import MoleculeBox from '../../components/moleculeBox/moleculeBox';
import MoleculeName from '../../components/moleculeName/moleculeName';
import MoleculeInfo from '../../components/moleculeInfo/moleculeInfo';
import styles from '../../pages/PlugInCompound/PlugInCompound.module.css';
import molecule from '../../data';

class PlugIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: '', 
        };
        this.callAPI = this.callAPI.bind(this);

    }

    callAPI() {

        const headers = new Headers();
        headers.append('Molecule-to-catch');

        const options = {
            method: 'POST',
            headers,
            body: molecule,
        };

        const request = new Request('http://localhost:2000/setSmile', options);

        //poslat post request
        //.then (poslat get reuqest .then // sta god dalje)

        fetch('http://localhost:2000/getCompound')
            .then(res => this.setState({apiResponse: res.json()}))
            .catch(err => err);
    }

    render() {
        let data = this.state.apiResponse;
        data = Object.entries(data);
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

