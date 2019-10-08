import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  login = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/friendslist');
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="login">
       <h2>Login Page</h2>

       <img src="https://images.pexels.com/photos/1049764/pexels-photo-1049764.jpeg?cs=srgb&dl=black-cat-black-keyboard-cat-1049764.jpg&fm=jpg"/>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
