import React, { Component } from 'react';

export default class Guess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proposal: null,
      tentative: 0,
      isNumberFound: false,
    };
  }

  onChange(e) {
    this.setState({
      proposal: Number(e.target.value),
    });
  }

  onClick() {
    this.setState(({ tentative }) => {
      return { tentative: tentative + 1 };
    });

    if (this.state.proposal === this.props.numberToGuess) {
      this.setState(({ isNumberFound }) => {
        return { isNumberFound: true };
      });
    }
  }

  render() {
    const { isNumberFound, tentative } = this.state;

    const response = isNumberFound ? (
      <div>Trouvé !</div>
    ) : (
      <div>Essaie encore</div>
    );

    return (
      <div>
        <label>Votre proposition </label>
        <input type="text" onChange={this.onChange.bind(this)} />
        <button onClick={this.onClick.bind(this)}>Tenter ma chance !</button>
        <p>Nombre de tentatives : {tentative}</p>
        {response}
      </div>
    );
  }
}
