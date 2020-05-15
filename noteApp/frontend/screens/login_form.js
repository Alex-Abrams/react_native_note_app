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
      this.props.navigation.navigate('TestHome'); //!! ok so maybe here this function can
      // be renderErrors and render and error or take to next screen
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

  componentDidUpdate(prevProps) {
    if(!!prevProps.currentUser.id) {
      this.props.navigation.navigate('TestHome');
    }
  }

  _renderSubmitLogin() {
    // const navigation = useNavigation();
    const { currentUser } = this.props;
    return (
      <View>
        <Button
          title="Submit Login"
          color="green"
          onPress={() => {
            this.props.sessionActions.login(this.state);
            {/*
            console.log(!this.props.sessionActions.login(this.state));
            if(!!this.props.currentUser.id) {
              this.props.navigation.navigate('TestHome');
            } else {
              console.log("invalid fool");
            };
              try {
              this.props.sessionActions.login(this.state)
              .then(user => {
              this.props.sessionActions.receiveCurrentUser(user.data);
              this.props.navigation.navigate('TestHome');
              })
              } catch(error) {
              alert("error");
              };
              */}


          }}>
        </Button>
      </View>
    );
  }

  onSubmit = async () => {
    try {
      if(!this.props.sessionActions.login(this.state)) {
        this.props.navigation.navigate('TestHome');
      }
    } catch (error) {
      alert("ERROR");
    }
  }

 // SubmitLogin() {
 //    const navigation = useNavigation();
 //    return (
 //      <View>
 //        <Button
 //          title="Submit Login"
 //          color="green"
 //          onPress={() => {
 //            this.props.sessionActions.login(this.state);
 //            navigation.navigate('TestHome');
 //          }}>
 //        </Button>
 //      </View>
 //    );
 //  }



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
            onPress={() => this.props.sessionActions.login(this.state)}>
        </Button>
        {this.showCurrentUser()}

        <Button
          title="Signup"
          color="purple"
          onPress={() => this.props.sessionActions.signup(this.state)}
          >
        </Button>

        {this._renderSubmitLogin()}
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
