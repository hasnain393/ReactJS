import React, { Component } from 'react';

class Form extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            listitem:""
        }
        this.handleOnChange=this.handleOnChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
        console.log(event);
        console.log(event.target);
        console.log(event.target.listitem);
        console.log(event.target.listitem.value);
        // this.props.additem(event.target.listitem.value);
        const {additem,increment}=this.props;
        increment()
        additem(event.target.listitem.value);
        
        this.state.listitem="";

    }

    handleOnChange(event){
    
        const {name,value}=event.target;

        this.setState(prevSate=>{
            console.log(event.target.value);
            return {
                [name]:value
            }
          
        })


    }
    
    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>enter items to add</label>
                    <input onChange={this.handleOnChange} name="listitem"  value={this.state.listitem}>

                    </input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;