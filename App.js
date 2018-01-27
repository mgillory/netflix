import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import List from './components/List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    padding: 8,
  }
})

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <List />
      </View>
    );
  }
}
