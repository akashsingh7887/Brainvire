/**
 * _TextInput page/screen
 * @screen
 */

import React, {Component} from 'react';
import {View, TextInput,StyleSheet} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
 import * as colors from '../../assets/colors/colors';

/**
 * _TextInput class
 * @function
 */
const _TextInput = props => {
  return (
    <View style={[styles.container, props.container]}>
      <TextField
        style={[{color: Color.Grey}, styles.inputBox, props.style]}
        label={props.label}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        maxLength={props.maxLength}
        labelFontSize={15}
        fontSize={20}
        activeLineWidth={1}
        tintColor={
          colors.blue
        }
        keyboardShouldPersistTaps={true}
        error={props.error}
        value={props.value}
        editable={props.editable != undefined ? props.editable : true}
        onBlur={props.onBlur != undefined ? props.onBlur : null}
        onKeyDown={props.onKeyDown}
      />
    </View>
  );
};
export default _TextInput;

const styles= StyleSheet.create({
  container: {
    width: '100%',
  },
  inputBox: {
    width: '100%',
    fontSize: 20,
    paddingHorizontal: 5,
  },
});