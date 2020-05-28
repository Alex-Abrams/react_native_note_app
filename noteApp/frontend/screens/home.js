import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

import merge from 'lodash/merge'; // testing merge

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      loading: true,
      dataSource: [],
    };
  }

// https://github.com/facebook/react-native/issues/10404    TRY AXIOS

  componentDidMount() {
    this.props.noteActions.fetchNotes();
    console.log(fetch('http://10.0.2.2:3000/notes'));
  }

  ///////////////
  ///////////

  _createNote = () => {
    const {text} = this.state;
    const note = {text};
    this.props.noteActions.createNote(note);
    this.setState({text: ''});
  };

  _renderNote(note) {
    return <Text>{note.text}</Text>;
  }

  _renderNotes() {
    const {notes, status} = this.props.notes;
    if (status === 'failure') {
      return <Text>{'Error'}</Text>;
    } else if (status == 'loading') {
      return <Text>{'Loading'}</Text>;
    }
    return <View>{notes.map(note => this._renderNote(note))}</View>;
  }

  _renderCreateForm() {
    return (
      <View>
        <TextInput
          style={styles.textfield}
          placeholder={'Text'}
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <Button title="Create" onPress={this._createNote} />
      </View>
    );
  }

  render() {
    console.log("PROPS: ", this.props);
    return (
      <ScrollView style={styles.container}>
        <Text>testing stufff</Text>
        {/*
          {this._renderNotes()}
          {this._renderCreateForm()}
        */}
      </ScrollView>
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
