import React, { Component } from 'react';

class Option extends Component {
    render() {
        return (
            <div>
          
                <h3>{this.props.list}</h3>
            </div>
        );
    }
}

export default Option;