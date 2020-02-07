import React from 'react';
import styles from './atribute.module.css'


/**
* Creates FirstAtribute component.
* @extends React.Component
*/
class FirstAtribute extends React.Component {

    /** 
    * Constructor.
    * @summary Sets state to an empty object
    * @param {Object} props
    */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /** 
    * Renders out the component.
    * @return {div} Brief description of the returning value here.
    */
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