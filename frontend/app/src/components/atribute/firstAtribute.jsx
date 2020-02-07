import React from 'react';
import styles from './atribute.module.css'

class FirstAtribute extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let { name, value } = this.props;
        return (
            <div>
                <div className={styles['first']}>
                    {name}
                    <div className={styles['secondary']}>
                        {value}
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstAtribute;