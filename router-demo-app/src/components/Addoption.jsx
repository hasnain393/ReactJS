import React, { Component } from 'react';

class Addoption extends Component {
      AddDetail(event){
          
         
          console.log(event.target.elements.title.value);
          const detail=event.target.elements.title.value
         this.props.handleAddoption(detail);
          event.preventDefault();
      }
    render() {
        return (
            <div>
            <form onSubmit={this.AddDetail.bind(this)}>
          
            <input type="text" name="title"/>
            <button >Add Option</button>
            </form>
                
            </div>
        );
    }
}

export default Addoption;