import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import styles from './styles';
import * as colors from '../../assets/colors/colors';
import _Text from '../../components/Text/_Text';
import Button from '../../components/Button/_Button';
import _TextInput from '../../components/TextInput/_TextInput';
import * as regex from '../../lib/validations';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {connect} from 'react-redux';
import * as actions from "../../lib/redux/actions/actions"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinScreen: true,
      signupScreen: false,
      email: '',
      password: '',
      num: '',
      username: '',
      error_email: false,
      error_password: false,
      error_num: false,
      error_username: false,
    };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }
  validate_email = text => {
    this.setState({email: text});
    if (this.state.email == '') {
      this.setState({error_email: true});
    } else if (!regex.regex_email.test(this.state.email)) {
      this.setState({error_email: true});
    } else {
      this.setState({error_email: false});
    }
  };

  validate_password = text => {
    this.setState({password: text});
    if (this.state.password == '') {
      this.setState({error_password: true});
    } else if (!regex.regex_password.test(this.state.password)) {
      this.setState({error_password: true});
    } else {
      this.setState({error_password: false});
    }
  };
  validate_num = text => {
    this.setState({num: text});
    if (this.state.num == '') {
      this.setState({error_num: true});
    } else if (!regex.regex_phone_number.test(this.state.num)) {
      this.setState({error_num: true});
    } else {
      this.setState({error_num: false});
    }
  };

  validate_username = text => {
    this.setState({username: text});
    if (this.state.username == '') {
      this.setState({error_username: true});
    } else if (!regex.regex_password.test(this.state.username)) {
      this.setState({error_username: true});
    } else {
      this.setState({error_username: false});
    }
  };

  validate_to_next = () => {
    this.validate_email(this.state.email);
    this.validate_password(this.state.password);

    if (
      this.state.password != '' &&
      this.state.email != '' &&
      this.state.error_email != true &&
      this.state.error_password != true
    ) {
      this.props.navigation.navigate('Home');
      setTimeout(()=> this.props.reduxLogin({
        email: this.state.email,
        password: this.state.password,
        isLoggedIn: true,
      }),500)
    }
  };

  validate_to_register = () => {
    this.validate_username(this.state.username);
    this.validate_email(this.state.email);
    this.validate_num(this.state.num);
    this.validate_password(this.state.password);

    if (
      this.state.username != '' &&
      this.state.email != '' &&
      this.state.num != '' &&
      this.state.password != '' &&
      this.state.error_username != true &&
      this.state.error_email != true &&
      this.state.error_num != true &&
      this.state.error_password != true
    ) {
      this.setState({signinScreen: !this.state.signinScreen});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.white} />
        <SafeAreaView style={styles.container}>
          <View style={styles.outer_view}>
            <View style={styles.inner_view}>
              <Image
                style={styles.image_view}
                source={require('../../assets/images/iconApp.png')}
              />
              <_Text style={styles.shop_text}>
                Shop
                <_Text style={styles.cart_text}>cart</_Text>
              </_Text>
            </View>
            <Button
              style={styles.top_text}
              buttonTextStyle={styles.skip_text}
              onPress={() => this.props.navigation.navigate('Home')}>
              Skip >>{' '}
            </Button>
          </View>
          <View style={styles.name_view}>
            <_Text style={styles.text_view}>
              {this.state.signinScreen ? 'Sign in' : 'Sign Up'}
            </_Text>
          </View>
          <View style={styles.line_green}>
            <View
              style={
                this.state.signinScreen
                  ? styles.green_seperator
                  : styles.grey_seperator
              }
            />
            <View
              style={
                this.state.signinScreen
                  ? styles.grey_seperator
                  : styles.green_seperator
              }
            />
          </View>
          {this.state.signinScreen ? (
            <View style={styles.large_view}>
              <KeyboardAvoidingView behavior="padding">
                <_TextInput
                  label={'Email'}
                  iconName="mail"
                  onChangeText={text => {
                    this.validate_email(text);
                  }}
                  onRef={ref => {
                    this.inputs['Email'] = ref;
                  }}
                  onSubmitEditing={() => {
                    this.validate_email(this.state.email);
                    this.focusNextField('Password');
                  }}
                  error={this.state.error_email}
                />

                <_TextInput
                  label={'Password'}
                  container={styles.password_v}
                  iconName="lock"
                  onChangeText={text => {
                    this.validate_password(text);
                  }}
                  onRef={ref => {
                    this.inputs['Password'] = ref;
                  }}
                  onSubmitEditing={() => {
                    this.validate_password(this.state.password);
                    this.validate_to_next();
                  }}
                  secureTextEntry={true}
                  error={this.state.error_password}
                />
              </KeyboardAvoidingView>
              <Button
                style={styles.forgot_view}
                buttonTextStyle={styles.forgot_text}
                onPress={() => {}}>
                Forgot Password?
              </Button>
              <Button
                style={styles.button}
                buttonTextStyle={styles.buttonTextStyle}
                onPress={() => {
                  this.validate_to_next();
                }}>
                LOGIN
              </Button>
            </View>
          ) : (
            <View style={styles.large_view}>
              <KeyboardAvoidingView behavior="padding">
                <_TextInput
                  label={'Username'}
                  iconName="user"
                  onChangeText={text => {
                    this.validate_username(text);
                  }}
                  onRef={ref => {
                    this.inputs['Username'] = ref;
                  }}
                  onSubmitEditing={() => {
                    this.validate_username(this.state.username);
                    this.focusNextField('Email');
                  }}
                  error={this.state.error_username}
                  value={this.state.username}
                />
                <_TextInput
                  label={'Email'}
                  iconName="mail"
                  onChangeText={text => {
                    this.validate_email(text);
                  }}
                  onRef={ref => {
                    this.inputs['Email'] = ref;
                  }}
                  onSubmitEditing={() => {
                    this.validate_email(this.state.email);
                    this.focusNextField('Mobile');
                  }}
                  error={this.state.error_email}
                  value={this.state.email}
                />
                <_TextInput
                  label={'Mobile Number'}
                  iconName="phone"
                  onChangeText={text => {
                    this.validate_num(text);
                  }}
                  onRef={ref => {
                    this.inputs['Mobile'] = ref;
                  }}
                  onSubmitEditing={() => {
                    this.validate_num(this.state.num);
                    this.focusNextField('Password');
                  }}
                  error={this.state.error_num}
                  value={this.state.num}
                />
                <_TextInput
                  label={'Password'}
                  // container={styles.password_v}
                  iconName="lock"
                  onChangeText={text => {
                    this.validate_password(text);
                  }}
                  onRef={ref => {
                    this.inputs['Password'] = ref;
                  }}
                  onSubmitEditing={() => {
                    this.validate_password(this.state.password);
                    this.validate_to_next();
                  }}
                  secureTextEntry={true}
                  error={this.state.error_password}
                  value={this.state.password}
                />
              </KeyboardAvoidingView>
              <Button
                style={styles.button_2}
                buttonTextStyle={styles.buttonTextStyle}
                onPress={() => {
                  this.validate_to_register();
                }}>
                REGISTER
              </Button>
            </View>
          )}
          {this.state.signinScreen ? (
            <Button
              style={styles.register_view}
              buttonTextStyle={styles.register_t}
              onPress={() => {
                this.forceUpdate();
                this.setState({signinScreen: !this.state.signinScreen});
              }}>
              Want to <_Text style={styles.register_text}>Sign up?</_Text>
            </Button>
          ) : (
            <Button
              buttonTextStyle={styles.register_t}
              onPress={() => {
                this.setState({
                  signinScreen: !this.state.signinScreen,
                  email: '',
                });
              }}>
              <_Text style={{fontSize: 20}}>Or sign up with{'         '}</_Text>
              <EvilIcons
                name={'sc-facebook'}
                size={35}
                color={colors.darkblue}
              />
              {'   '}
              <EvilIcons name={'sc-twitter'} size={35} color={colors.blue} />
              {'   '}
              <EvilIcons name={'sc-google-plus'} size={35} color={colors.red} />
            </Button>
          )}
        </SafeAreaView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    reduxLogin: payload => dispatch(actions.login(payload)),
  };
};
export default connect(
  null,
  mapDispatchToProps,
)(Login);
