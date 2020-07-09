import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
// import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from './styles';
import _Text from '../../components/Text/_Text';
import * as globals from '../../lib/globals';
import * as colors from '../../assets/colors/colors';
import Button from '../../components/Button/_Button';
import ImageSlider from 'react-native-image-slider';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      images: [
        'https://placeimg.com/640/640/nature',
        'https://placeimg.com/640/640/people',
        'https://placeimg.com/640/640/beer',
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          backgroundColor={colors.white}
          barStyle={'dark-content'}
        />
        <SafeAreaView style={styles.container}>
          <View style={styles.carousel}>
            <ImageSlider
              style={styles.image_slider}
              loopBothSides
              autoPlayWithInterval={2000}
              images={this.state.images}
              customButtons={(position, move) => {
                return (
                  <View style={styles.pagination_slider}>
                    {this.state.images.map((image, index) => {
                      return (
                        <View
                          key={index}
                          style={
                            position == index
                              ? styles.active_dot_slider
                              : styles.inactive_dot_slider
                          }
                        />
                      );
                    })}
                  </View>
                );
              }}
            />
          </View>
          <View
            style={styles.collage}>
            <Image
              source={require('../../assets/images/image.jpeg')}
              style={styles.collage_image}
            />
            <View style={styles.collage_vertical}>
              <Image
                source={require('../../assets/images/image.jpeg')}
                style={styles.collage_image}
              />
              <Image
                source={require('../../assets/images/image.jpeg')}
                style={styles.collage_image}

              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Home;
