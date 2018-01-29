import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import List from './components/List';
import Slider from './components/Slider';
import Header from './components/Header';

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
  },
  innerView: {
    flex: 1,
    backgroundColor: '#141414',
    padding: 8,
  }
})

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.outerView}>
        <StatusBar
          backgroundColor="#000"
          barStyle="light-content"
        />
        <Header />
        <View style={styles.innerView}>
          <Slider />
          <List />
        </View>
      </View>
    );
  }
}
