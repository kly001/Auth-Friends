import React from 'react';
import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom';
import Login from "./components/Login"
import Home from "./components/Home"
import FriendsList from './components/Friendslist';
import PrivateRoute from "./components/PrivateRoute"


import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/login">Login</Link>
          </li>
          <li>
              <Link to="/friendslist">FriendsList</Link>
          </li>
         
      </ul>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  path="/login" component={Login} />
        <PrivateRoute  exact path="/friendslist" component={FriendsList} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
