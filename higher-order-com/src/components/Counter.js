import React, { Component } from 'react';

class Counter extends Component {
    render() {
        const {increment,count}=this.props
        //or use this.props.increment
        return (
            <div>
                <button onClick={increment} >click me  destructor props{count} </button>
                
            </div>
        );
    }
}

export default Counter;