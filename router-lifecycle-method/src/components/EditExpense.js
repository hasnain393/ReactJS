import React, { Component } from 'react';

class EditExpense extends Component {
    render() {
        return (
            <div>
        <h1>welcome </h1>
 <h2>               editing expense for {this.props.match.params.id}   </h2>
 
            </div>
        );
    }
}

export default EditExpense;