import React from 'react';
import {View, Text, Button} from 'react-native'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
// import reducers from './frontend/reducers';
// import Home from './frontend/containers/homeContainer';
import TestHomeContainer from './frontend/containers/test_container';
import rootReducer from './frontend/reducers/root_reducer';
import logger from 'redux-logger'

// import ErrorBoundary from './frontend/screens/error_boundary';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import LoginForm from './frontend/screens/login_form';
import LoginFormContainer from './frontend/containers/login_screen_container';

// const oldRootReducer = combineReducers({...reducers});  //ATL 1337 change to testReducer
// const store = createStore(rootReducer, applyMiddleware(thunk, logger));
let store = null;

function configureStore(initialState = {}) {
  // Check to avoid multiple configured stores
  if (store) {
    return store;
  }
  const middlewares = [thunk, logger];
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  return store;
}

let teststore = configureStore();


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Login Fomrm"
        onPress={() => navigation.navigate('LoginForm')}
      />
    </View>
  );
}


// console.log("store:");
// console.log(store.getState()); // yeah i can see the store!
// window.store = store;
// window.getState = store.getState;
// console.log(store.getState().notes.error);
// console.log("store:");

const Stack = createStackNavigator();
 // probably need something like if session.currentUSer then avoid the login/sign up page
const App = () => {
  return (
    <Provider store={teststore}>
      <NavigationContainer>
        <Stack.Navigator initialRoute="LoginForm">
          <Stack.Screen name="LoginForm" component={LoginFormContainer} />
          <Stack.Screen name="TestHome" component={TestHomeContainer} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
