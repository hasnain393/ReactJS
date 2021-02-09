import React, { Component } from 'react';
import UpdateComponent from './withCounter'
class ButtonClick extends Component {
    
    render() {
        const {count,increment}=this.props
        return (
            <div>
                <p>you clicked x time{count}</p>
                <button  onClick={increment} >click me {this.props.surname}</button>
                
            </div>
        );
    }
}

export default UpdateComponent(ButtonClick,5);