// Change# to master file
export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_SINGLE_NOTE = "RECEIVE_SINGLE_NOTE";
export const RECEIVE_ERROR = "RECEIVE_ERROR";
export const LOADING_STATUS = "UPDATE_STATUS";
export const REQUEST_NOTES = "REQUEST_NOTES";

// import axiosFetchNotes from "./noteActions";

import fetch from 'cross-fetch'; /////////////!!!!!!!!!!!!!!!

import axios from 'axios';


export const receiveAllNotes = (notes) => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

export const receiveSingleNote = (note) => ({
  type: RECEIVE_SINGLE_NOTE,
  note
});

export const receiveError = error => ({
  type: RECEIVE_ERROR,
  error,
});

export const requestNotes = () => {
  return {
    type: REQUEST_NOTES,
  };
}

// ///////// i think below is the good one but still not wokring
//
//definitly works buyt not rendering right
// export const requestAllNotes = () => dispatch => {
//   return new Promise((resolve, reject) => {
//     dispatch({type: LOADING_STATUS});
//     axios.get('http://10.0.2.2:3000/notes')
//     .then(response => {
//       const notes = response.data;
//       {dispatch(receiveAllNotes(notes))};
//       resolve();
//     })
//     .catch (err => {
//     console.log("CATCH ERROR CAUGHT SOMETHING")
//       {dispatch(receiveError(err.response))};
//     });
//
//   });
// };
//
//////////////////////////////////////////
export const requestAllNotes = () => dispatch => {    ///currently in used
  axios.get('http://10.0.2.2:3000/notes')
  .then(response => {
    const notes = response.data;
    {dispatch(receiveAllNotes(notes))};
  });
}


export const createNote = (note) => dispatch => {
    axios({
      method: 'post',
      url: 'http://10.0.2.2:3000/notes',
      data: { note }
    })
    .then(note => {
      // {dispatch(receiveSingleNote(note))};
      {dispatch(requestAllNotes())};
    });
}



////////////////////////////////////////////////
export function fetchNotes() {
  return dispatch => {
    dispatch(requestNotes());
    return fetch('http://10.0.2.2:3000/notes')
    .then(response => response.data())
    .then(response => dispatch(receiveAllNotes(reponse.data)))
  };
}
//////////////////////// // sooooemthign like tghis but really fuck with it for 2 hours
// export const createNote = (note) => dispatch => {
//   return new Promise((resolve, reject) => {
//     dispatch({type: LOADING_STATUS});
//     axios({
//       method: 'post',
//       url: 'http://10.0.2.2:3000/notes',
//       data: { note }
//     }).then(note => {dispatch(receiveSingleNote(note))});
//     resolve();
//   })
//   .catch (err => {
//     console.log("createNote error");
//     {dispatch(receiveError(err.response))};
//   });
// }

/////////////////////////////////////////////////////////////////////////

// export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';

// export const receiveNotes = data => ({
//   type: FETCH_NOTES_SUCCESS,
//   data,
//   status: "success",
//   error: null,
// });
//
//
// import * as types from './noteActions';
//
// export function fetchNotes() {
//   // console.log("FUCKING FETCHNOTES"); ////
//   return async dispatch => {
//     dispatch({type: types.FETCH_NOTES});
//     // console.log("Fucking dispatch"); ////
//     try {
//       let response = await fetch('http://10.0.2.2:3000/notes');
//       if (response.status !== 200) {
//         throw new Error('FETCH_ERROR');
//       }
//       response = await response.json();
//       // dispatch({type: types.FETCH_NOTES_SUCCESS, data: response});
//       {dispatch(receiveNotes(response))};
//       // console.log("FUCKING SUCCESS", response);
//     } catch (error) {
//       dispatch({type: types.FETCH_NOTES_FAILURE, error});
//     }
//   };
// }
//
// export function createNote(note) {
//   return async dispatch => {
//     dispatch({type: types.CREATE_NOTE});
//     try {
//       let response = await fetch('http://10.0.2.2:3000/notes', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({note}),
//       });
//       if (response.status !== 200) {
//         throw new Error('FETCH_ERROR');
//       }
//       response = await response.json();
//       dispatch({type: types.CREATE_NOTE_SUCCESS, data: response});
//     } catch (error) {
//       dispatch({type: types.CREATE_NOTE_FAILURE, error});
//     }
//   };
// }
