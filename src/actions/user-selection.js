import * as actionType from '@/constants/user-selection';

export function setnumberOfPlayers(numberOfPlayers) {
  return {
    type: actionType.SET_NUMBER_OF_USERS, 
    numberOfPlayers
  }
}