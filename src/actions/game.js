import * as actionType from '@/constants/game';

export function setDicesAndHand(dices, hand, player) {
  return {
    type: actionType.SET_DICES_AND_HAND, 
    dices,
    hand,
    player
  }
}

export function modifyDicesAndHand(dices, hand, player) {
  return {
    type: actionType.MODIFY_DICES_AND_HAND, 
    dices,
    hand,
    player
  }
}