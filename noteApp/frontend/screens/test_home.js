import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
  import fetch from 'cross-fetch';
// import { axiosFetchNotes } from '../actions/noteActions';
// import { requestAllNotes, receiveAllNotes} from '../actions/test_actions';

import axios from 'axios';

export default class TestHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };

  }


  componentDidMount() {
    this.props.noteActions.requestAllNotes();
  }

  _createNote = () => {
    const { text } = this.state;
    const note = {text};
    this.props.noteActions.createNote(note);
    this.props.noteActions.requestNotes();
    this.props.noteActions.requestAllNotes();


    this.setState({text: ''});
  }

  _renderCreateForm() {
    return(
      <View>
        <TextInput
          style={styles.textfield}
          placeholder={"text"}
          onChangeText={text => this.setState({text})}
          value={this.state.text}
          />
        <Button title="Create" onPress={this._createNote} />
      </View>
    )
  }


  _renderNotes(notes) {
    const { isFetching } = this.props;
    const notesArray = Object.values(notes);

    const fetchTest = (isFetching) ? <Text>Loading...</Text> : <Text></Text>

    return <View>{notesArray.map((note, i) =>
            <Text key={i}>{note.text}</Text>)}
              {fetchTest}
            </View>
  }


  render() {
    const { notes, isFetching } = this.props;
    console.log("isFetching: ", isFetching);

    return(
      <View style={styles.container}>
        {this._renderNotes(notes)}
        {this._renderCreateForm()}
        {/*
          */}
      </View>
    );
  }


}


const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    marginHorizontal: 16,
  },
  textfield: {
    backgroundColor: '#eee',
    padding: 16,
    marginTop: 8,
  },
});
