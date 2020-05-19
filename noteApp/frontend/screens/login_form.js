import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects'; // hmm
import { connect } from 'react-redux';

import { AsyncStorage } from 'react-native';

import { useNavigation } from '@react-navigation/native';
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
      // this.props.navigation.navigate('TestHome'); //!! ok so maybe here this function can
      // be renderErrors and render and error or take to next screen
      return null;
    } else {
      return (
        <View>
          <Text>
            Not Logged In

          </Text>
        </View>
      )
    };
  }

  _signInHandler = async () => {
    console.log("dicktitis");
    const response = await this.props.sessionActions.testLogin(this.state)
    .then(resp => {
      console.log("resp.data:", resp.data);
    })
    .catch(error => {
      console.log("FUCKING ERROR m8");
    });


  }

  componentDidUpdate(prevProps) {
    if(this.props.currentUser.id !== prevProps.currentUser.id) {
      this.props.navigation.navigate('TestHome');
    }
  }

  renderErrors() {
    if(this.props.isLoading) {
      return(
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return null;
    };
  }

  _renderSubmitLogin() {
    const { currentUser } = this.props;
    return (
      <View>
        <Button
          title="Submit Login"
          color="green"
          onPress={() => {
            this.props.sessionActions.testLogin(this.state);
          }}>
        </Button>
      </View>
    );
  }


  render() {
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
            onPress={() => this._signInHandler}>
        </Button>
        {this.showCurrentUser()}

        <Button
          title="Signup"
          color="purple"
          onPress={() => this.props.sessionActions.signup(this.state)}
          >
        </Button>

        {this._renderSubmitLogin()}
        {this.renderErrors()}
      </View>


    ); // end return
  } // end render
} // end class


const styles = {
  viewStyle: {
    marginTop: 50,
    padding: 10,
  },
};

export default LoginForm;
