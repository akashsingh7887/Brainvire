import React, {Component} from 'react';
import {Text, View, Image, SafeAreaView,TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
// import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from './styles';
import _Text from '../../components/Text/_Text';
import * as globals from '../../lib/globals';
import * as colors from '../../assets/colors/colors';
import Button from '../../components/Button/_Button';
import ImageSlider from 'react-native-image-slider';

class Welcome extends Component {
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
    this._carousel = {};
  }

  render() {
    return (
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

        <View style={styles.pagination_view}>
          <_Text style={styles.welcome_text}>
            Welcome to{' '}
            <_Text
              style={styles.bold_text}>
              Shop Cart
            </_Text>
          </_Text>
          <View style={styles.green_seperator} />
          <_Text style={styles.decpt_text}>
            Each online store has its own bag. But if you want to go at multiple
            store, you can have only one.
          </_Text>
        </View>
        <Button style={styles.button} buttonTextStyle={styles.buttonTextStyle}
        onPress={()=>this.props.navigation.navigate("Login")}
        >
          {' '}
          GET STARTED
        </Button>
      </SafeAreaView>
    );
  }
}

export default Welcome;
