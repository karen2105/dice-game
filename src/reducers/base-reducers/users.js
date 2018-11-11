import { Map } from 'immutable';
import * as actionType from '@/constants/user-selection';

const initialState = Map({
  numberOfPlayers: Map({}),
});

export default function users(state = initialState, action) {
  switch(action.type) {
    case actionType.SET_NUMBER_OF_PLAYERS:
      return state.set('numberOfPlayers', action.numberOfPlayers);
    default:
      return state;
  }
};
