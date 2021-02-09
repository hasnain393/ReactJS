import React, { Component } from 'react';


const UpdateComponent =(OriginalComponent,incernum)=>{
    class NewComponent extends Component {
        constructor(props, context) {
            super(props, context);
            this.state={
                count:0
            }
            this.increment=this.increment.bind(this)
        }
        
        increment(){
            this.setState((prevState)=>{
                return{
                    count:prevState.count+incernum
                }
            })
    
        }
        render() {
            return (
                <div>
                    <OriginalComponent {...this.props} count={this.state.count} increment={this.increment} />
                </div>
            );
        }
    }
    
    return NewComponent

}



export default UpdateComponent;