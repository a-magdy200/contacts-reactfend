import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    inputValue: ''
  }
  onInputChange(inputValue) {
    this.setState({inputValue});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" value={this.state.inputValue} onChange={(event) => this.onInputChange(event.target.value)} placeholder="Say Something" />
          <p className="echo">Echo:</p>
			{this.state.inputValue !== '' && (<p>{this.state.inputValue}</p>)}
        </div>
      </div>
    );
  }
}

export default App;
