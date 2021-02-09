import React, { Component } from 'react';
import  Counter  from "./Counter";
import Form from './Form'

class Parent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            todos:["one","two"],
            count:0
        }
        this.increment=this.increment.bind(this);
        this.additem=this.additem.bind(this);

    }
    increment(){
        this.setState(prevState=>{
            return{
                count:prevState.count+1
            }
        })
    }
    additem(item){
        console.log("inside parent");
        console.log(item);
this.setState(prevState=>{
    return{
        todos:[...prevState.todos,item]
    }
})

    }
    render() {
        return (
            <div>
                <hr></hr>
                <h1>Demostrating Destructoring of props</h1>
                <p>check all the array element in console</p>
              {  this.state.todos.forEach(item=>  {console.log(item)} )}
                <Counter increment={this.increment} count={this.state.count}/>
                <Form increment={this.increment} additem={this.additem}/>
                
            </div>
        );
    }
}

export default Parent;