import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/


class App extends Component {

  constructor(props) {
    super(props);
    const users = [{ username: 'Amy' }, { username: 'John' }];

    const messages = [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ];
    this.state = {
      users,
      messages,
      firstUserInput: '',
      secondUserInput: '',
    }
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  sendMessage = (e, username) => {
    e.preventDefault();
    let {users, firstUserInput, secondUserInput} = this.state;
    let newMessage = {text: '', username};
    if (username === users[0].username) {
      newMessage.text = firstUserInput;
      this.setState((currentState) => ({
        messages: [...currentState.messages, newMessage],
        firstUserInput: ''
      }));
    } else {
      newMessage.text = secondUserInput;
      this.setState((currentState) => ({
        messages: [...currentState.messages, newMessage],
        secondUserInput: ''
      }));
    }

  }
  updateInput = (key, value) => {
    this.setState({[key]: value});
  }
  render() {
    let {users, messages, firstUserInput, secondUserInput} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[0].username}</div>

            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[0].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input
                  value={firstUserInput}
                  onChange={event => this.updateInput('firstUserInput', event.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button
                    onClick={(e) => this.sendMessage(e, users[0].username)}
                    className="btn submit-button"
                    disabled={firstUserInput === ''}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[1].username}</div>
            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[1].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input
                  value={secondUserInput}
                  onChange={event => this.updateInput('secondUserInput', event.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button
                    onClick={(e) => this.sendMessage(e, users[1].username)}
                    className="btn submit-button"
                    disabled={secondUserInput === ''}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
