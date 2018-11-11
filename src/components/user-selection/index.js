import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import store from "@/store";
import { setnumberOfPlayers } from "@/actions/user-selection";

export default class UserSelection extends Component {
  constructor(props) {
    super(props);

    this.inputnumberOfPlayers = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    store.dispatch(setnumberOfPlayers(this.inputnumberOfPlayers.current.value));
    event.preventDefault(); 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Name of game here</h1>
        </header>
        <h2>Instructions</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select number of users:
            <input 
              ref={this.inputnumberOfPlayers}
              type="number"
              maxLength="1"
              autoComplete="off"
              max="5"
              min="2"
              size="4"
              required
            />
          </label>
          <Link to="/game">HTML</Link>
          <button type="button"> Start playing!</button>
        </form>
      </div>
    );
  }
}

