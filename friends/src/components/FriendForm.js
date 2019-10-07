import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendForm extends React.Component {
  state = {
    friends: {
      id:Date.now(),
      name:"",
      age:"",
      email:""
    }
  };

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.friends,
        [event.target.name]: event.target.value
      }
    });
  };

  addFriend = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/friends', this.state.friends)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div classNmae="friendform">
       <h2>FriendForm</h2>
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            name="name"
            placeholder="Friend's Name"
            value={this.state.friends.name}
            onChange={this.handleChange}
          />
          <input
            type="age"
            name="age"
            placeholder="Age"
            value={this.state.friends.age}
            onChange={this.handleChange}
          />
           <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.friends.email}
            onChange={this.handleChange}
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
