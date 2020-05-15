import { createStackNavigator } from 'react-navigation';
import TestHomeContainer from './test_container';
import LoginFormContainer from './login_screen_container';


const AppNavigator = createStackNavigator({
  Login: { screen: LoginFormContainer },
  Home: { screen: TestHomeContainer },
});

export default AppNavigator;
