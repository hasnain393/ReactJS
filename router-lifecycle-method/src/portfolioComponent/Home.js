import React, { Component } from 'react';

class Home extends Component {
    componentDidMount(){
        console.log("did mount");
        debugger;
    }
    componentWillUnmount(){
        console.log("will unmount");
        debugger;
    }
    render() {
        return (
            <div>
                
                <h1>dashboard /home of this app</h1>
            </div>
        );
    }
}

export default Home;