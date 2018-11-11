import * as actionType from '@/constants/game';

export function setHand(hand) {
  return {
    type: actionType.SET_HAND, 
    hand
  }
}