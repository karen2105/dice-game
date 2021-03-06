import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IndividualBoard from '@/components/game/individual-board';
import store from '@/store';

function createBoards(numberOfPlayers) {
  let boards = [];

  for (let i = 0; i < numberOfPlayers; i++) {
    boards.push(<IndividualBoard key={`${i}-board`} playerNumber={i + 1} />);
  }
  return boards;
}

const Game = ({numberOfPlayers}) => {
  return (
    <div className="dice-game-wrapper">
      <h1>Dices game</h1>
      <div className="individual-board-wrapper">
        {createBoards(numberOfPlayers)}
      </div>
      <div>
        <h2>Do you want to play again?</h2>
        <Link to='/'><button className="primary">Yes</button></Link>
        <Link to='/goodbye'><button className="primary">No</button></Link>
      </div>
    </div>
  );
}

export default Game;