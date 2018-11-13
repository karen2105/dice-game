import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import users from '@/reducers/base-reducers/users';
import dicesAndHand from '@/reducers/base-reducers/game';

const appReducer = combineReducers({configuration: users, game: dicesAndHand});

export default appReducer;