export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const CREATE_NOTE_SUCCESS = 'CREATE_NOTE_SUCCESS';
export const CREATE_NOTE_FAILURE = 'CREATE_NOTE_FAILURE';
///////////////////^^^^////////////////////

import * as types from '../actionTypes/notes';

import axios from 'axios';

export const receiveNotes = data => ({
  type: FETCH_NOTES_SUCCESS,
  data,
  status: "success",
  error: null,
});


export function fetchNotes() {
  return async dispatch => {
    dispatch({type: types.FETCH_NOTES});
    try {
      let response = await fetch('http://10.0.2.2:3000/notes');
      console.log("response: ", response);

      if (response.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      dispatch({type: types.FETCH_NOTES_SUCCESS, data: response});
    } catch (error) {
      dispatch({type: types.FETCH_NOTES_FAILURE, error});
    }
  };
}

export function createNote(note) {
  return async dispatch => {
    dispatch({type: types.CREATE_NOTE});
    try {
      // let response = await fetch('http://localhost:5000/notes', {
        //
      let response = await fetch('http://10.0.2.2:3000/notes', {
        //
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({note}),
      });
      if (response.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      // dispatch({type: types.CREATE_NOTE_SUCCESS, data: response});
      {dispatch(receiveNotes(response))};
    } catch (error) {
      dispatch({type: types.CREATE_NOTE_FAILURE, error});
    }
  };
}

export function axiosFetchNotes() {
  axios.get('http://10.0.2.2:3000/notes')
    .then(function (response) {
      let responseData = response.data;
      let result = [];
      responseData.forEach(note => {
        result.push(note.text);
      })

      return result;
    })
    .catch(function (error) {
      console.log(error);
    });
}
