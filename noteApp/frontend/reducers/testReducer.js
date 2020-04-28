// Change# to master file
// just comment it all out iono

import {
  RECEIVE_ALL_NOTES,
  RECEIVE_SINGLE_NOTE,
  RECEIVE_ERROR,
  LOADING_STATUS,
  REQUEST_NOTES} from '../actions/test_actions';

import merge from 'lodash/merge';

const INITIAL_STATE = {
  isFetching: false,
};

const testReducer = (state = INITIAL_STATE, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_NOTES:
      const notFetchState = {
        isFetching: false,
      }

      return merge({}, state, notFetchState, action.notes);

    case REQUEST_NOTES:
      const fetchState = {
        isFetching: true,
      };
      return merge({}, state, fetchState);


    case RECEIVE_SINGLE_NOTE:
      const newNote = { [action.note.id]: action.note };
      return merge({}, state, newNote);

    case RECEIVE_ERROR:
      const newState = {
        error: action.error
      }
      return merge({}, state, newState);

    case LOADING_STATUS:
      // const statusState = {
      //   error: {},
      //   status: "loading",
      // }
      return merge({}, state, statusState);
    default:
      return state;
  }
};

export default testReducer;

///////////////////////////////////////////////////////////
// import merge from 'lodash/merge';
//
// const INITIAL_STATE = {
//   data: [],
//   status: null,
//   error: null,
//   createStatus: null,
//   createError: null,
// };
//
// const testReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'FETCH_NOTES':
//       return {
//         ...state,
//         status: 'loading',
//         error: null,
//       };
//
//     case 'FETCH_NOTES_SUCCESS':
//       return {
//         ...state,
//         status: 'success',
//         data: action.data,
//         error: null,
//       };
//
//       // let statusState = {
//       //     ...state,
//       //     status: 'success',
//       //     // data: action.data,
//       //     data: "FARRRRT",
//       //     error: null,
//       // };
//
//       // return merge({}, state, statusState);
//
//       // return merge({}, state)
//
//     case 'FETCH_NOTES_FAILURE':
//       return {
//         ...state,
//         status: 'failure',
//         error: action.error,
//       };
//
//     case 'CREATE_NOTE':
//       return {
//         ...state,
//         createStatus: 'loading',
//         createError: null,
//       };
//
//     case 'CREATE_NOTE_SUCCESS':
//       return {
//         ...state,
//         createStatus: 'success',
//         data: [...state.data, action.data],
//         createError: null,
//       };
//
//     case 'CREATE_NOTE_FAILURE':
//       return {
//         ...state,
//         createStatus: 'failure',
//         createError: action.error,
//       };
//
//     default:
//       return state;
//   }
// };
//
// export default testReducer;
