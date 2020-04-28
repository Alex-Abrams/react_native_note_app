import { combineReducers } from 'redux';
import testReducer from './testReducer';


const rootReducer = combineReducers({
  notes: testReducer,
});

export default rootReducer;
