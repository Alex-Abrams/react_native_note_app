// Change# to master file
import { connect } from 'react-redux';

import TestHome from '../screens/test_home';
// import Home from '../screens/home';

// import { requestAllNotes, receiveAllNotes } from '../actions/test_actions';
// import { fetchNotes, createNote } from '../actions/test_actions';

////// bindactioncreaators
// import * as noteActions from '../actions/noteActions';/
import * as noteActions from '../actions/test_actions';

import { bindActionCreators } from 'redux';
//////


const mapStateToProps = state => ({
  // notes: Object.values(state.notes),
  // status: state.notes.status,
  notes: state.notes,
  isFetching: state.notes.isFetching,
  // notes: state.notes.notes,
});

// const mapDispatchToProps = dispatch => ({
//   requestAllNotes: () => dispatch(requestAllNotes()),
// });



const mapDispatchToProps = dispatch => ({
  noteActions: bindActionCreators(noteActions, dispatch),
});


// export default connect(
//   mapStateToProps,
//   // null,
//   mapDispatchToProps
// )(TestHome);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestHome);


////////////////////////////////////////////////////////
