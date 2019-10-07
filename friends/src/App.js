import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";
import './App.css';
import FriendsList from './components/Friendslist';

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
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
