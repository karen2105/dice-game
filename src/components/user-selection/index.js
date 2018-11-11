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
    event.preventDefault(); 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pre-selection Test</h1>
        </header>
        <h2>Instructions</h2>
        <p>
          Each Poker dice have six sides, one each of an Ace, King, Queen, Jack, 10, and 9. 
          These are used to form a poker hand. 
          Each player can roll the dice up to 3 times trying to get a better hand.
          After the players have rolled the dice, wins the one with better hand.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select number of players:
            <input 
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
          <button type="button">Set</button>
        </form>

        <Link to="/game">
          <button type="submit">Start playing!</button>
        </Link>
      </div>
    );
  }
}

