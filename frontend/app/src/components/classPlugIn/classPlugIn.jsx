import React from 'react';
import molecule from '../../data';
import MoleculeInfo from '../../components/moleculeInfo/moleculeInfo';
import MoleculeName from '../../components/moleculeName/moleculeName';
import MoleculeBox from '../../components/moleculeBox/moleculeBox';
import styles from '../../pages/PlugInCompound/PlugInCompound.module.css';
import axios from 'axios';


class PlugIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: '',
        };
        this.callAPI = this.callAPI.bind(this);

    }

    callAPI() {
        axios.get('http://localhost:2000/getCompound', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            params: molecule
        })
            .then(response => {
                this.setState({
                    apiResponse: response.data
                });
            })
            .catch(error => error);
    }

    render() {
        let data = this.state.apiResponse;
        data = Object.entries(data);
        return (
            <div>
                <div className={styles['container']}>
                    <div>
                        <MoleculeBox />
                        <MoleculeName data={data} />
                    </div>
                    <div className={styles['mol_info']}>
                        <MoleculeInfo data={data} />
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

