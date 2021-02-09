import logo from './logo.svg';
import './App.css';
import ButtonClick from './components/ButtonClick'
import HoverCount from './components/HoverCount'
import Parent from './components/Parent'
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <ButtonClick surname="hasnain" />

<HoverCount surname="shaikh er" />
<Parent />
<Admin isAdmin={true} info="password is ali" acc="citi"/>
    </div>
  );
}

export default App;
