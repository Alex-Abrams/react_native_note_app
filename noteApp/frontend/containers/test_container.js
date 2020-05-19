// Change# to master file
import { connect } from 'react-redux';

import TestHome from '../screens/test_home';
// import Home from '../screens/home';

////// bindactioncreaators
// import * as noteActions from '../actions/noteActions';/
import * as noteActions from '../actions/test_actions';
import * as sessionActions from '../actions/session_actions';

import { bindActionCreators } from 'redux';
//////


const mapStateToProps = state => ({
  // notes: Object.values(state.notes),
  notes: state.notes,
  isFetching: state.notes.isFetching,
  currentUser: state.session,
});


const mapDispatchToProps = dispatch => ({
  noteActions: bindActionCreators(noteActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch),
  // sessionActions: bindActionCreators(session_actions, dispatch),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestHome);


////////////////////////////////////////////////////////
