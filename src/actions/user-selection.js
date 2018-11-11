import * as actionType from '@/constants/user-selection';

export function setNumberOfPlayers(numberOfPlayers) {
  return {
    type: actionType.SET_NUMBER_OF_PLAYERS, 
    numberOfPlayers
  }
}