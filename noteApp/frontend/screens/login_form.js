import React, { Component } from 'react';
import { View, Button } from 'react-native';
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
    // return (e) => {
    //   this.setState({ [type]: e.target.value });
    // };

    this.setState({ [type]: input});

    // this.setState({text: ''});
  }

  render() {
    console.log(this.state);
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
