import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import _Text from '../Text/_Text';
export default class _Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[this.props.style]}>
        <_Text style={this.props.buttonTextStyle}>
          {' '}
          {this.props.children}{' '}
        </_Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {fontFamily: 'Muli-Light'},
});
