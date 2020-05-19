export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const LOAD_SPINNER = 'LOAD_SPINNER';
export const FAILED_LOGIN = 'FAILED_LOGIN';

import axios from 'axios';
import fetch from 'cross-fetch';


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const loadSpinner = () => ({
  type: LOAD_SPINNER,
});

export const failedLogin = (error) => ({
  type: FAILED_LOGIN,
  error,
});

// orriginal
// export const testLogin = user => dispatch => {
//   dispatch(loadSpinner());
//   axios({
//     method: 'post',
//     url: 'http://10.0.2.2:3000/session',
//     data: { user }
//   }).then((response) => {
//     console.log("STATUS =>", response.status);
//     if (response.status === 401) {
//       console.log('AUTHENTICATION ERROR!!zip!!');
//       dispatch(failedLogin("failedLogin error"));
//
//     } else {
//       console.log("reponse=> ", response);
//       (response).then(response => {
//         console.log("DATA =>", response.data);
//         {dispatch(receiveCurrentUser(response.data))};
//       });
//     };
//   });
//   // .then(user => {
//   //   {dispatch(receiveCurrentUser(user.data))}
//   // });
// };/// COMEBACK HERES


export const testLogin = user => dispatch => {
  dispatch(loadSpinner());
  axios({
    method: 'post',
    url: 'http://10.0.2.2:3000/session',
    data: { user }
  }).then((response) => {
    console.log("STATUS =>", response.status);
    if (response.status === 200) {
      // console.log("reponse=> ", response);
      // (response).then(response => {
        // console.log("DATA =>", response.data);
        {dispatch(receiveCurrentUser(response.data))};
      // });
    } else {
      console.log('AUTHENTICATION ERROR!!zip!!');
      dispatch(failedLogin("failedLogin error"));
    };
  });
  // .then(user => {
  //   {dispatch(receiveCurrentUser(user.data))}
  // });
};/// COMEBACK HERES


export const login = user => dispatch => {
  axios({
    method: 'post',
    url: 'http://10.0.2.2:3000/session',
    data: { user }
  })
  .then(user => {
    {dispatch(loadSpinner())};
    {dispatch(receiveCurrentUser(user.data))};
  })
  .catch(err => {
    console.log(err);
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
    console.log("user: ", user);
    {dispatch(receiveCurrentUser(user))}
  });
}
