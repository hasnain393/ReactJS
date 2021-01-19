import React, { Component } from 'react';

class Action extends Component {
    render() {
        return (
            <div>
            {
                console.log(this.props.options.length)
            }
                <button onClick={this.props.handleRandom}  disabled={!this.props.options.length > 0}>What should i do?</button>
            </div>
        );
    }
}

export default Action;