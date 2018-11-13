import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { 
  DICE, 
  FIVE_OF_KIND,
  FOUR_OF_KIND,
  FULL_HOUSE,
  STRAIGHT,
  THREE_OF_KIND,
  TWO_PAIR,
  ONE_PAIR,
  BUST
} from '@/constants/dices';
import Dice from '@/components/game/dice';
import store from "@/store";
import { setDicesAndHand, modifyDicesAndHand } from "@/actions/game";

function getValuesForDices() {
  const min = 0;
  const max = 5;

  return Math.floor(Math.random() * (max - min)) + min;
}

function howManyTimes(array, numberToCount) {
  return array.map(value => value === numberToCount).filter(Boolean).length;
}

function getHandName(hand) {
  let counterCards = [0, 0, 0, 0, 0, 0];

  hand.map(card => {
    const index = DICE.indexOf(card);
    counterCards[index] = counterCards[index] + 1;
  });


  if (counterCards.includes(3) && counterCards.includes(2)) {
    return FULL_HOUSE;
  }

  if(counterCards.includes(5)) {
    return FIVE_OF_KIND;
  }

  if(counterCards.includes(4)) {
    return FOUR_OF_KIND;
  }

  if(counterCards.includes(3)) {
    return THREE_OF_KIND;
  }

  if (counterCards.includes(2)) {
    const amountPairs = howManyTimes(counterCards, 2);
    if(amountPairs === 1){
      return ONE_PAIR
    }
    if(amountPairs === 2) {
      return TWO_PAIR
    }
  }

  if (counterCards.includes(1)) {
    const amountCards = howManyTimes(counterCards, 1);

    if(amountCards === 5){
      if(counterCards.indexOf(0) === 0 || counterCards.indexOf(0) === counterCards.length - 1) {
        return STRAIGHT;
      }
    }
  }

  return `Your highest card is ${DICE[counterCards.indexOf(1)]}`;
}

function createDices() {
  let dicesComp = [];
  let hand = [];

  for (let i = 0; i < 5; i++) {
    const card = DICE[getValuesForDices()];
    dicesComp.push(<Dice key={`${i}-dice`} card={card}/>);
    hand.push(card);
  }

  const handName = getHandName(hand);

  return {dicesComp, handName, hand};
}

function rollAgain() {
  let dicesComp = [];
  let hand = [];

  for (let i = 0; i < 5; i++) {
    const card = DICE[getValuesForDices()];
    dicesComp.push(<Dice key={`${i}-dice`} card={card}/>);
    hand.push(card);
  }

  const handName = getHandName(hand);

  return {dicesComp, handName, hand};
}

function createDicesAndSaveToStore(playerNumber) {
  const dicesForBoard = createDices();
  store.dispatch(setDicesAndHand(dicesForBoard.hand, dicesForBoard.handName, playerNumber));

  return dicesForBoard;
}

function modifyDicesAndSaveToStore(playerNumber) {
  const dicesForBoard = createDices();
  store.dispatch(modifyDicesAndHand(dicesForBoard.hand, dicesForBoard.handName, playerNumber));

  return dicesForBoard;
}

export default class IndividualBoard extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      individualBoard: createDicesAndSaveToStore(this.props.playerNumber),
      counter: 0,
    };

    this.handleRollAgain = this.handleRollAgain.bind(this);
  }

  handleRollAgain(e, playerNumber) {
    this.setState({
      individualBoard: modifyDicesAndSaveToStore(playerNumber),
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
