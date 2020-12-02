import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './Card';
import axios from 'axios';


class App extends React.Component {
  state = {
    users: [],
    // I have no followers, hence this array
    followers: ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"]
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/jml1996`)
      .then((resp)=> {
        console.log(resp);
        this.setState({
          users: [...this.state.users, resp]
        });
      })
      .catch(err=> console.log(err));

    // I have no followers, hence this array:
    this.state.followers.map((user) => {
      return(axios.get(`https://api.github.com/users/${user}`)
      .then((resp)=> {
        console.log(resp);
        console.log(this.state.users);
        this.setState({
          users: [...this.state.users, resp]
        });
      }));
    })
  }

  render() {
    return(
    <div className="container">
      <div className="header">
        <img src="./assets/lambdalogo.png" alt="Lambda Logo"/>
          <p>❤️'s</p>
        <img src="./assets/githublogo.png" alt="GitHub Logo" />
      </div>
      {
        this.state.users.map(user => (   
          <Card key={Date.now()} user={user} />
        ))
      }
    </div>)
  }
}

export default App;
