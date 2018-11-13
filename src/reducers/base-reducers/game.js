import { Map, List } from 'immutable';
import * as actionType from '@/constants/game';

const initialState = Map({
  dicesAndHand: List([]),
});

export default function dicesAndHand(state = initialState, action) {
  switch(action.type) {
    case actionType.SET_DICES_AND_HAND:
      return state.setIn(['dicesAndHand'], state.get('dicesAndHand').push({dice: action.dices, hand: action.hand}))

    case actionType.MODIFY_DICES_AND_HAND:
      const indexPosition = action.player - 1;
      return state.setIn(['dicesAndHand', indexPosition], {dice: action.dices, hand: action.hand});
         
    default:
      return state;
  }
};


