import React, { Component } from 'react';
import Counter from './Counter';
import VisibilityToggle from './VisibilityToggle'
class App extends Component {




  render() {
    return (
      <div>
      <VisibilityToggle />
        <Counter count={10} />
      </div>
    );
  }
}

export default App;