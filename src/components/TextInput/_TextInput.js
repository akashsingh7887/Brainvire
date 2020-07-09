/**
 * _TextInput page/screen
 * @screen
 */

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import * as colors from '../../assets/colors/colors';
import {TextInput} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

class _TextInput extends Component {
  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
  }

  onSubmitEditing() {
    this.props.onSubmitEditing();
  }

  focus() {
    this.textInput.focus();
  }
  render() {
    const props = this.props;
    return (
      <View style={[styles.container, props.container]}>
        <Feather
          name={props.iconName}
          size={25}
          color={colors.blue}
          style={{marginRight: '2%'}}
        />
        <TextInput
          style={[
            {color: colors.grey, backgroundColor: colors.white},
            styles.inputBox,
            props.style,
          ]}
          label={props.label}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
          fontSize={20}
          error={props.error}
          value={props.value}
          editable={props.editable != undefined ? props.editable : true}
          onBlur={props.onBlur != undefined ? props.onBlur : null}
          onKeyDown={props.onKeyDown}
          theme={{
            colors: {
              placeholder: colors.grey,
              text: colors.blue,
              primary: colors.blue,
              underlineColor: colors.grey,
            },
          }}
          ref={input => (this.textInput = input)}
          onSubmitEditing={this.onSubmitEditing.bind(this)}
          secureTextEntry={props.secureTextEntry} 
        />
      </View>
    );
  }
}
export default _TextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  inputBox: {
    width: '85%',
    fontSize: 20,
    paddingHorizontal: 5,
    fontFamily: 'Muli-regular',
  },
});
