import React, { Component } from 'react';
import UpdateComponent from './withCounter'

class HoverCount extends Component {

    render() {
        const {count,increment,surname}=this.props
        console.log({...this.props});
        console.log(this.props);
        return (
            <div>

                <h2 onMouseOver={increment}>hover to oncrement {surname}{count} </h2>
            </div>
        );
    }
}

export default UpdateComponent(HoverCount,10);