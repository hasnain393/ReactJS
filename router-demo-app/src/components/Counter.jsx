import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
    //   this.handleInc=handleInc.bind(this);
    //   this.handleDec=handleDec.bind(this);
    //   this.handleRes=handleRes.bind(this);
        this.state={
            count:props.count
        }
        
    }

     handleInc(){
        console.log(this);
        
        console.log("-1 presssed");
            this.setState((prevState)=>{
            return {
                count:prevState.count+1
            };
        }); 
    }   
     handleDec(){
        console.log(this);
        
        console.log("+1 presssed");
            this.setState((prevState)=>{
            return {
                count:prevState.count-1
            };
        }); 

    }
     handleRes(){
        console.log(this);
        
        console.log("+1 presssed");
        //     this.setState(()=>{
        //     return {
        //         count:0
        //     };
        // }); 
        this.setState(()=>{
                return{
                    count:0
                }
                    
         });

    }
    
    render() {
       
        return (
            <div>
                <h2>Count:{this.state.count}</h2>
                <button onClick={this.handleInc.bind(this)}>+1</button>
                <button onClick={this.handleDec.bind(this)}>-1</button>
                <button onClick={this.handleRes.bind(this)}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps={
    count:20
}

export default Counter;