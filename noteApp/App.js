import React from 'react';
import {View, Text} from 'react-native'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
// import reducers from './frontend/reducers';
// import Home from './frontend/containers/homeContainer';
import TestHomeContainer from './frontend/containers/test_container';
import rootReducer from './frontend/reducers/root_reducer';

import ErrorBoundary from './frontend/screens/error_boundary';

import LoginForm from './frontend/screens/login_form';

// const oldRootReducer = combineReducers({...reducers});  //ATL 1337 change to testReducer
const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log("store:");
console.log(store.getState()); // yeah i can see the store!
// console.log(store.getState().notes.error);
// console.log("store:");

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <LoginForm />
        <TestHomeContainer />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
