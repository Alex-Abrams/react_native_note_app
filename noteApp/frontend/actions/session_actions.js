export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

import axios from 'axios';
import fetch from 'cross-fetch';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

// original
export const login = user => dispatch => {
  axios({
    method: 'post',
    url: 'http://10.0.2.2:3000/session',
    data: { user }
  })
  .then(user => {
    {dispatch(receiveCurrentUser(user.data))}
  });
}


export const logout = () => dispatch => {
  axios({
    method: 'delete',
    url: 'http://10.0.2.2:3000/session',
  })
  .then(user => {
    {dispatch(logoutCurrentUser(user))}
  });
}

export const signup = (user) => dispatch => {
  axios({
    method: 'post',
    url: 'http://10.0.2.2:3000/users',
    data: { user },
  })
  .then(user => {
    // console.log("user: ", user);
    {dispatch(receiveCurrentUser(user))}
  });
}
