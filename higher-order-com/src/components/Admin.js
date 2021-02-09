import React, { Component } from 'react';
import SuperAdminsComponent from './hoc'

class Admin extends Component {
    render() {
        return (
            <div>
                <hr></hr>
                <h6>this hoc</h6>
                <p>this is from admin componnet</p>
                <h1>{this.props.info}</h1>
                <p>{this.props.acc}</p>
            </div>
        );
    }
}

export default SuperAdminsComponent(Admin);