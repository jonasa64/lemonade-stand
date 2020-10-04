import React from 'react';
import './App.css';
import LemonadeStore from "./components/LemonadeStore";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
function App() {
  return (
      <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav">
                  <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/buy">Buy lemonade</NavLink></li>
                  <li className="nav*item"><NavLink className="nav-link" to="/about">About</NavLink></li>
              </ul>

          </nav>


          <div className="App">
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/buy" component={LemonadeStore}/>
                  <Route exact path="/about" component={About}/>
              </Switch>
          </div>
      </Router>

  );
}

export default App;
