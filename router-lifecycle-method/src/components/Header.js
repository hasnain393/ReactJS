import React, { Component } from 'react';
import { BrowserRouter,Route ,Switch,Link,NavLink} from "react-router-dom";



class Header extends Component {
    render() {
        return (
            <div>
                <h1>this is header app</h1>
            <NavLink to="/"  exact={true} activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
            <NavLink to="/about" activeClassName="is-active">About</NavLink>
            </div>
        );
    }
}

export default Header;