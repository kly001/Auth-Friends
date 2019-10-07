import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from "./components/Login"
import Home from "./components/Home"
import FriendsList from './components/Friendslist';
import FriendForm from "./components/FriendForm"

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
              <Link to="/protected">FriendsList</Link>
          </li>
          <li>
              <Link to="/friendform">FriendForm</Link>
          </li>
      </ul>
        <Route exact path="/" component={Home}/>
        <Route  path="/login" component={Login} />
        <Route path="/friendform" component={FriendForm}/>
        <Route  path="/protected" component={FriendsList} />
    </div>
    </Router>
  );
}

export default App;
