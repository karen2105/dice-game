import { Map } from 'immutable';
import * as actionType from '@/constants/game';

const initialState = Map({
  hand: Map({}),
});

export default function hand(state = initialState, action) {
  switch(action.type) {
    case actionType.SET_HAND:
      return state.set('hand', action.hand);
    default:
      return state;
  }
};
