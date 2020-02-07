import React from 'react';
import styles from './atribute.module.css';
/**
* Creates Atribute component.
* @extends React.Component
*/
class Atribute extends React.Component {
    /** 
    * Constructor.
    * @summary Sets state to an empty object.
    * @param {Object} props 
    */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /** 
    * Renders out the component.
    * @return {div} Returns a div with all other information
    */
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
