import logo from '../logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Indecision from './Indecision'

import Counter from './Counter'
import Home from './Home'

function App() {
  return (
    <Router> 
           <div className="App"> 
            <ul className="App-header"> 
              <li> 
                <Link to="/">Home</Link> 
              </li> 
              <li> 
                <Link to="/indeci">Indecision App1</Link> 
              </li> 
              <li> 
                <Link to="/count">Counter App2</Link> 
              </li> 
            </ul> 
            <Switch> 
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/indeci' component={Indecision}></Route> 
              <Route exact path='/count' component={Counter}></Route> 
            </Switch> 
          </div> 
       </Router> 
    
  );
}

export default App;
