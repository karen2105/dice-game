import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import users from '@/reducers/base-reducers/users';

const appReducer = combineReducers({configuration: users});

export default appReducer;