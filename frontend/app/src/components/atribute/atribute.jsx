import React from 'react';
import styles from './atribute.module.css';

class Atribute extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        let { name, value } = this.props;
        return (
            <div>
                <div className={styles['primary']}>
                    {name}
                    <div className={styles['secondary']}>
                        {value}
                    </div>
                </div>
            </div>
        );
    }
}


export default Atribute;
