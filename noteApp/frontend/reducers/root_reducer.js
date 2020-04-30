import { combineReducers } from 'redux';
import testReducer from './testReducer';
import sessionReducer from './session_reducer';


const rootReducer = combineReducers({
  notes: testReducer,
  session: sessionReducer,
});

export default rootReducer;
