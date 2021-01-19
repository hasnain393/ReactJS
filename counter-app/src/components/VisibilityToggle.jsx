import React, { Component } from 'react';

class VisibilityToggle extends Component {

    constructor(props) {
        super(props);
        this.state={
            visibility:false    
        }

    }
    
    toggleVisibilitys(){
        console.log("buttton is presed");
        console.log(this.state.visibility);
        this.setState((prevState)=>{
            return{
                visibility:!prevState.visibility
           }
           
        })
         console.log(this.state.visibility);
    }



    render() {
        return (
            <div>
          <h1></h1>
          <button onClick={this.toggleVisibilitys.bind(this)}>{this.state.visibility?'hide detail':'show detail'}</button>

{
    this.state.visibility &&(
        <div>
        <p>here is some details</p>
        </div>  
    )
}
            
   
                
            </div>
        );
    }
}

export default VisibilityToggle;