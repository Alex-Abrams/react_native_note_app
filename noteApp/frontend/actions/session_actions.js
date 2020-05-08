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
    console.log(user.data);
    {dispatch(receiveCurrentUser(user.data))}
  });
}
///// testing out some Auth, seems i need to get username/password seperatre
// export const authLogin = (username, password) => dispatch => {
//   // const user = { username: username, password: password };
//   axios({
//     method: 'post',
//     url: 'http://10.0.2.2:3000/session',
//     auth: {
//       username: username,
//       password: password,
//     }
//   })
//   .then(() => {
//     {dispatch(receiveCurrentUser({ username: username, password: password }))}
//   });
// }

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
    url: 'http://10.0.2.2:3000/user',
  })
  .then(user => {
    {dispatch(receiveCurrentUser(user))}
  });
}
