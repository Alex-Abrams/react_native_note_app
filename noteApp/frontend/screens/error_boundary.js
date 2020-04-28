import React, {Component} from 'react';

import { Text } from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
    // adhd
    // the other maze wad dakdw akw akjd adakw da wdai
    //da k akdk dkk dakjkd kiiundnakd jdodh knhonnkdakud o
    // aodjokdmh da kjjhd hhkkhdj
    // huuawd jjawo dkkmmndl aoikdku ijkji kf
    // another one kj
    // dadw k ldd oo ddo admm kkd
  }

  componentDidCatch(error, errorInfo) {
    // console.log("error catch no work");
  }

  render() {
    if (this.state.hasError) {
      return (
        <Text>MATT STOP FREAKING OUT</Text>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
