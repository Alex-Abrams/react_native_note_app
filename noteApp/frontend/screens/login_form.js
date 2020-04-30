import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects'; // hmm
// import Button from 'react-native-button';
import { connect } from 'react-redux';
// import { emailChanged, passwordChanged } from '../actions/';


class LoginForm extends Component {
  // bnasically loging stuff

  render() {
    return (
      <View style={styles.viewStyle}>
        <Hoshi
        label={'Username'}
        borderColor={'#b76c94'}
        backgroundColor={'#FFF'}
        />

        <Hoshi
          label={'Password'}
          borderColor={'#b76c94'}
          backgroundColor={'#FFF'}
          secureTextEntry
        />

        <Button
          title="Submit"
          style={{
            fontSize: 20,
            color: '#ffffff',
            backgroundColor: '#00cc00',
            padding: 20,
            marginTop: 10
          }}
          styleDisabled={{ color: 'red' }}
          onPress={() => console.log('Pressed!!')}
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
  }
};

export default LoginForm;
