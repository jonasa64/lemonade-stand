import React from 'react';
import './App.css';
import LemonadeStore from "./components/LemonadeStore";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
function App() {
  return (
      <Router>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/buy">Buy lemonade</NavLink>
          <NavLink to="/about">About</NavLink>

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
