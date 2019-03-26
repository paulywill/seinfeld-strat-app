import React, { Component } from 'react';
import './App.css';
import About from './About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
                <Router>
                <div>
                <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'} className="nav-link">About</Link></li>
                </ul>

                <Switch>
                <Route path='/about' component={About} />
                </Switch>
                </div>
                </Router>
        );
    }
}

export default App;
