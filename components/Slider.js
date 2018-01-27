import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  images: {
    flex: 1,
    width
  }
});

const Slider = props => (
  <Image style={styles.images} source={props.uri}/>
)

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderImages: [
        require('../assets/1.jpg'),
        require('../assets/2.jpg'),
        require('../assets/3.jpg')
      ],
      touched: false
    }
  }

  render() {
    return(
      <Swiper
        autoplay={!this.state.touched}
        autoplayTimeout={4}
        height={240}
        onTouchStart={(e, state, context) => this.setState({ touched: true })}
      >
        {
          this.state.sliderImages.map((item, i) => <Slider
            uri={item}
            key={i}
          />)
        }
      </Swiper>
    );
  }
}
