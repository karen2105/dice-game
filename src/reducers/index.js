import { combineReducers } from 'redux-immutable';
import users from '@/reducers/base-reducers/users';

const baseReducers = {
  configuration: users
};

const appReducer = combineReducers(baseReducers);

export default appReducer;