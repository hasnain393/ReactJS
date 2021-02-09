import React, { Component } from 'react';
import SuperAdminsComponent from './hoc'

class Admin extends Component {
    render() {
        return (
            <div>
                <hr></hr>
                <h3>this HOC</h3>
                {this.props.isAdmin && <p>this is from admin componnet</p>}
                <h1>{this.props.info}</h1>
                <p>{this.props.acc}</p>
            </div>
        );
    }
}

export default SuperAdminsComponent(Admin);