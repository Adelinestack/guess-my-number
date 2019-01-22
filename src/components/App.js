import React, { Component } from 'react';
import Guess from './Guess';
import './App.css';

class App extends Component {
  state = {
    numberToGuess: Math.floor(Math.random() * 10),
  };

  render() {
    const { numberToGuess } = this.state;
    return (
      <div className="App">
        <h1>Guess My Number</h1>
        <h2>Devinez le nombre choisi entre 1 et 10 </h2>
        <Guess numberToGuess={numberToGuess} />
      </div>
    );
  }
}

export default App;
