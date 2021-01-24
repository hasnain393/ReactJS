import './App.css';
import { BrowserRouter,Route ,Switch} from "react-router-dom";
import Header from './portfolioComponent/Header'
import Home from './portfolioComponent/Home'
import Portfolio from './portfolioComponent/Portfolio'
import Contact from './portfolioComponent/Contact'
import Error from './portfolioComponent/Error'
import Work from './portfolioComponent/Work'

import './components/portfolioComponent/Header.css'

function App() {
  
  return (
    // <div className="App">
    //   <BrowserRouter>
    //   <div>
    //     <Header />
      
    //   <Switch>

    //   <Route path="/" exact={true}  component={Dashboard}/>
    //   <Route path="/edit/:id"   component={EditExpense}/>
    //   <Route path="/create"  component={CreateExpense}/>
    //   <Route  path="/about"  component={About}/>
    //   <Route    component={ErrorPage}/>
    //   </Switch>
    //   </div>
    //   </BrowserRouter>

  
    // </div>
    <BrowserRouter>
    <div>
      <Header />
     
      <Switch>
        <Route path="/" component={Home} exact={true}></Route>
        <Route path="/portfolio" exact={true} component={Portfolio}></Route>
        <Route path="/portfolio/:id" component={Work}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route  component={Error}></Route>

      </Switch>
      </div>
      </BrowserRouter>
 
  
  );
}

export default App;
