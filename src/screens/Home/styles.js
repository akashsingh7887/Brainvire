import {StyleSheet} from 'react-native';
import * as globals from '../../lib/globals';
import * as colors from '../../assets/colors/colors';
export default (styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center',backgroundColor:colors.white},
  carousel: {flex: 0.4},
  pagination_view: {
    flex: 0.27,
    //  bottom: '7%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination_sep: {},
  pagin_dot_style: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  welcome_text: {fontSize: 30},
  decpt_text: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 35,
    color: colors.grey,
  },
  button: {
    backgroundColor: colors.blue,
    flex: 0.08,
    width: globals.deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {color: colors.white, fontSize: 21, fontWeight: 'bold'},
  green_seperator: {
    width: 50,
    borderWidth: 1,
    borderColor: colors.green,
    margin: '2%',
  },

  pagination_slider: {justifyContent: 'center', flexDirection: 'row'}, //
  active_dot_slider: {
    backgroundColor: colors.grey,
    marginHorizontal: 3,
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: -20,
  }, //
  inactive_dot_slider: {
    backgroundColor: colors.grey,
    marginHorizontal: 3,
    width: 8,
    height: 8,
    borderRadius: 6,
    marginTop: -20,
  }, //
  image_slider: {height: '40%'}, //
  bold_text:{
    fontFamily: 'Muli-Bold',
  },
  collage:{
    flex: 0.6,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.white,
  },
  collage_image:{flex: 0.5,borderWidth: 1,
    borderColor: colors.white,},
    collage_vertical:{flex: 0.5,borderWidth: 1,
      borderColor: colors.white,},
}));
