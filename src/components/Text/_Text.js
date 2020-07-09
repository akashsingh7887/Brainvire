import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class _Text extends Component {
  render() {
    return (
      <Text style={[styles.textStyle, [this.props.style]]}>
        {this.props.children}
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {fontFamily: 'Muli-Light'},
});
