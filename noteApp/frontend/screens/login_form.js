import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects'; // hmm
import { connect } from 'react-redux';
// import { emailChanged, passwordChanged } from '../actions/';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }
  // bnasically loging stuff

  handleInput(type, input) {
    this.setState({ [type]: input});
  }

  showCurrentUser() {
    // console.log(this.props.currentUser.id);
    if(!!this.props.currentUser.id) {
      return (
        <View>
          <Text>
            {this.props.currentUser.id + 'user found'}
          </Text>

        </View>
      );
    } else {
      return (
        <View>
          <Text>
            User not found
          </Text>
        </View>
      )
    };
  }

      // onPress={() => console.log('Pressed!!')}

      // onPress={() => this.props.sessionActions.authLogin(
      //   this.state.username, this.state.password)}>

  render() {
    // console.log(this.props.currentUser);
    console.log("farts: ", this.state);
    return (
      <View style={styles.viewStyle}>
        <Hoshi
        label={'Username'}
        borderColor={'#b76c94'}
        backgroundColor={'#FFF'}
        onChangeText={username => this.setState({username})}
        />

        <Hoshi
          label={'Password'}
          borderColor={'#b76c94'}
          backgroundColor={'#FFF'}
          onChangeText={password => this.setState({password})}
          secureTextEntry
        />

        <Button
          title="Submit"
          buttonStyle={{
            fontSize: 20,
            color: '#ffffff',
            backgroundColor: '#00cc00',
            padding: 20,
            marginTop: 10
          }}
          styleDisabled={{ color: 'red' }}
            onPress={() => this.props.sessionActions.login(this.state)}>
        </Button>
        {this.showCurrentUser()}

        <Button
          title="Signup"
          color="purple"
          onPress={() => this.props.sessionActions.signup(this.state)}
          >
        </Button>
      </View>


    ); // end return
  } // end render
} // end class


const styles = {
  viewStyle: {
    marginTop: 50,
    padding: 10,
  },
  signUp: {

  }
};

export default LoginForm;
