import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  LOAD_SPINNER,
  FAILED_LOGIN,
} from '../actions/session_actions.js';

import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  id: null,
  isLoading: false,
});

const INITIAL_STATE = {
  isLoading: false,
}

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case LOAD_SPINNER:
      return merge({}, state, {isLoading: true});
    case RECEIVE_CURRENT_USER:
      return merge({}, {isLoading: false}, { id: action.currentUser });
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
