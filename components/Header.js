import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 8
  },
  logo: {
    width: 120,
    height: 40
  }
});

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Icon name='bars' color='#fff' size={25}/>
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../assets/netflix-logo.png')}/>
        <TouchableOpacity>
          <Icon name='search' color='#fff' size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}
