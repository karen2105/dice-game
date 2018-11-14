import React, {Component} from 'react';
import { createDices, modifyDices } from '@/logic/game';

export default class IndividualBoard extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      individualBoard: createDices(this.props.playerNumber),
      counter: 0,
    };

    this.handleRollAgain = this.handleRollAgain.bind(this);
  }

  handleRollAgain(e, playerNumber) {
    this.setState({
      individualBoard: modifyDices(playerNumber),
      counter: this.state.counter + 1,
    });
  }

  render() {
    const { playerNumber } = this.props;
    const isButtonDisabled = this.state.counter < 3 ? false : true;

    return (
      <div className="individual-board">
        <div className="ib-header-wrapper">
          <div className="hand-name-container">
            Player {playerNumber}: {this.state.individualBoard.handName}
          </div>
          <button
            className="secondary"
            onClick={(e) => this.handleRollAgain(e, playerNumber)}
            disabled={isButtonDisabled}
          >
            Roll again
          </button>
        </div>
        <div className="dices-container">
          {this.state.individualBoard.dicesComp}
        </div>
      </div>
    );
  }
}
