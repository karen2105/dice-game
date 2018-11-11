import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { DICE } from '@/constants/dices';
import store from '@/store';

function getValuesForDices() {
  const min = 0;
  const max = 5;

  return Math.floor(Math.random() * (max - min)) + min;
}

export default class Game extends Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    const  numberofPlayers
    return (
      <div className="dice-game-wrapper">
        {this.props.numberOfPlayers}
        {DICE[getValuesForDices()]}

      </div>
    );
  }
}

