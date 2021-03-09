import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import AddUserForm from "./components/AddUserForm";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/
class User {
  constructor(userData) {
    this.firstname = userData.firstname;
    this.lastname= userData.lastname;
    this.username = userData.username;
  }
  firstname = '';
  lastname = '';
  username = '';
  gamesPlayed = 0;
  showGamesPlayed = true;
  toggleGamesPlayed = () => {
    this.showGamesPlayed = !this.showGamesPlayed;
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    let users = {};
    users['gamemaster'] = new User({
      firstname: 'game',
      lastname: 'master',
      username: 'gamemaster'
    });
    this.state = {
      users,
      formView: false
    }
  }
  addUser = () => {
    this.setState({formView: true});
  }
  cancelAddUser = () => {
    this.setState({formView: false});
  }
  submitUser = (userData) => {
    this.setState((currentState) => {
      let {users} = currentState;
      users[userData.username] = new User(userData);
      return {
        users,
         formView: false
      };
    });
  }
  toggleShowGamesPlayed = (username) => {
    this.setState((currentState) => {
      let newUsers = {...currentState.users};
      newUsers[username].toggleGamesPlayed();
      return {
        users: newUsers
      };
    })
  }
  render() {
    let {users, formView} = this.state;
    return (
      <div className="App">
        <Header logo={logo} />
        {
          formView ?
            <AddUserForm
              onCancel={this.cancelAddUser} onSubmit={this.submitUser} users={users}/> :
            <UsersList
              users={users}
              toggleShowGamesPlayed={this.toggleShowGamesPlayed}
              addUser={this.addUser}/>
        }
      </div>
    );
  }
}

export default App;
