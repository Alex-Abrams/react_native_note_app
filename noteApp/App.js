import React from 'react';
import {View, Text} from 'react-native'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
// import reducers from './frontend/reducers';
// import Home from './frontend/containers/homeContainer';
import TestHomeContainer from './frontend/containers/test_container';
import rootReducer from './frontend/reducers/root_reducer';

// import ErrorBoundary from './frontend/screens/error_boundary';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import LoginForm from './frontend/screens/login_form';
import LoginFormContainer from './frontend/containers/login_screen_container';

// const oldRootReducer = combineReducers({...reducers});  //ATL 1337 change to testReducer
const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log("store:");
console.log(store.getState()); // yeah i can see the store!
// console.log(store.getState().notes.error);
// console.log("store:");

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginForm" component={LoginFormContainer} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
