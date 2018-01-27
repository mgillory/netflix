import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet
} from 'react-native';

import data from '../data'

const styles = StyleSheet.create({
  textStyle: {
    color: '#fff',
    marginTop: 8,
    marginBottom: 8,
  }
});

export default class List extends Component {

  _renderItem = (item) => {
    return(
      <Image style={{width: 120, height: 180}} source={{uri: item.item.image}}/>
    );
  }

  render() {
    return (
      <View>
        <Text style={styles.textStyle}>{'My pick'}</Text>
        <FlatList
          data={data}
          renderItem={this._renderItem}
          horizontal
          ItemSeparatorComponent={() => <View style={{width: 8}}/>}
        />
      </View>
    );
  }
}
