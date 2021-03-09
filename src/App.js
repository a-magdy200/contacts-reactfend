import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const [value1, value2, value3, proposedAnswer] = this.generateNumbers();

    this.state = {
      value1,
      value2,
      value3,
      proposedAnswer,
      numCorrect: 0,
      numQuestions: 1
    };
  }
  generateNumbers() {
  	const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
    
  }
  onGameAnswer(answer) {
    const [value1New, value2New, value3New, proposedAnswerNew] = this.generateNumbers();
    let {value1, value2, value3, proposedAnswer} = this.state;
    let isCorrect = answer === ((value1 + value2 + value3) === proposedAnswer);
    this.setState((currentState) => ({
      numQuestions: currentState.numQuestions + 1,
      value1: value1New,
      value2: value2New,
      value3: value3New,
      proposedAnswer: proposedAnswerNew,
      numCorrect: currentState.numCorrect + (isCorrect ? 1 : 0)
    }));
  }
  render() {
    let {value1, value2, value3, proposedAnswer, numQuestions, numCorrect} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.onGameAnswer(true)}>True</button>
          <button onClick={() => this.onGameAnswer(false)}>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
