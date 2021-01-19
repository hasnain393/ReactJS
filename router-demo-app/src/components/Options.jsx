import React, { Component } from 'react';
import Option from "./Option";

class Options extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
            <h1>Here are the list:</h1>
         
            
            <button onClick={this.props.handleDeleteOption}>Remove All</button>
            {
                this.props.options.map((ele) => {
                    console.log(ele);
                return (
                    <Option key={ele} list={ele} />
    
            );
          }
          )
        }
                

            

                
            </div>
        );
    }
}

export default Options;