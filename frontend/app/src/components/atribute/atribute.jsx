import React from 'react';

class Atribute extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {};
    }

    render() {
        let { name } = this.props.name;
        let { value } = this.props.value;
        return (
            <div>
                <div>
                    {name}: {value}                  
                </div>
            </div>
        );
    }
}

export default Atribute;