import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from "@/store";
import { setNumberOfPlayers } from "@/actions/user-selection";

export default class UserSelection extends Component {
  constructor(props) {
    super(props);

    this.inputNumberOfPlayers = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    store.dispatch(setNumberOfPlayers(this.inputNumberOfPlayers.current.value));
    this.props.history.push('/game');
    event.preventDefault(); 
  }

  render() {
    return (
      <div className="dice-game-wrapper">
        <header className="App-header">
          <h1>Pre-selection Test</h1>
        </header>
        <h2>Instructions</h2>
        <p>
          Each Poker dice have six sides, on each side there is one of the following Ace, King, Queen, Jack, 10, and 9. 
          These are used to form a Poker hand. Each player can roll up to 3 times. 
          After the players have rolled the dice, the one with the best hand wins.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label className="label-select-number-players">
            Select the amount of players
            <input 
              className="input-select-number-players"
              ref={this.inputNumberOfPlayers}
              type="number"
              maxLength="1"
              autoComplete="off"
              max="5"
              min="2"
              size="4"
              required
            />
          </label>
          <button className="primary" type="submit">Start playing!!</button>
        </form>
      </div>
    );
  }
}

