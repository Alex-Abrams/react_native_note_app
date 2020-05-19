import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../screens/login_form';

import * as sessionActions from '../actions/session_actions';

const mapStateToProps = state => ({
  // prolly gunna want is fetching here
  currentUser: state.session, //.currentUser.username
  isLoading: state.session.isLoading,
});

const mapDispatchToProps = dispatch => ({
  sessionActions: bindActionCreators(sessionActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
