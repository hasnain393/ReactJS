import React, { Component } from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Options from './Options'
import Action from './Action'
import Addoption from "./Addoption";

class Indecision extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        this.handleRandom=this.handleRandom.bind(this);
        this.state={

            options:['one thing','two thing','thre thing']
        }
    }

    handleDeleteOption(){
        this.setState(()=>{
            return {
                options:[]
            }
        })
        

    }
    handleAddoption(option){
        this.setState((prevState)=>{
            return{
                options:[...prevState.options,option]
                /*
                options:prevState.options.concat(option)
                 */
            }
        })
    }
    handleRandom(){
       alert( this.state.options[Math.floor(Math.random()*this.state.options.length)])
        

    }
    render() {
        return (
            <div className="in">
            <Header />
            <Action  handleRandom={this.handleRandom} options={this.state.options}/>
            <Options handleDeleteOption={this.handleDeleteOption} options={this.state.options} />
            <Addoption  handleAddoption={this.handleAddoption.bind(this)}/>
            <Footer />
                
            </div>
        );
    }
}

export default Indecision;