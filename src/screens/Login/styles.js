import {StyleSheet} from 'react-native';
import * as colors from "../../assets/colors/colors"
import * as globals from '../../lib/globals';

export default (styles = StyleSheet.create({
  container: {flex: 1,  backgroundColor:colors.white, paddingHorizontal:20},
  green_seperator: {
    width: 50,
    borderWidth: 1,
    borderColor: colors.green,
    margin: 7,
  },
  grey_seperator: {
    width: 50,
    borderWidth: 1,
    borderColor: colors.grey,
    margin: 7
  },

  button: {
    backgroundColor: colors.blue,
    height:60,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:40,
    marginVertical:10
  },
  button_2: {
    backgroundColor: colors.blue,
    height:60,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:40,
    marginTop:10
  },
  buttonTextStyle: {color: colors.white, fontSize: 21, fontWeight: 'bold'},
  outer_view:{flex: 0.18, alignItems: 'center', flexDirection: 'row'},
inner_view:{flex: 0.7, alignItems: 'center', flexDirection: 'row'},
image_view:{margin: 5, height: 40, width: 40},
shop_text:{
  fontSize: 30,
  fontFamily: 'Muli-regular',
  color: colors.blue,
},
cart_text:{fontSize: 30, color: colors.green},
top_text:{flex: 0.3},
skip_text:{
  alignSelf: 'flex-end',
  color: colors.grey,
  fontSize: 20,
},
name_view:{flex: 0.08, alignItems: 'center', justifyContent: 'center'},
text_view:{
  fontSize: 25,
  fontFamily: 'Muli-regular',
},
line_green:{
  flex: 0.04,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
},
large_view:{flex: 0.7, paddingTop: 30},
password_v:{marginTop: 25},
forgot_view:{marginVertical: 10, marginRight: 10},
forgot_text:{
  alignSelf: 'flex-end',
  color: colors.grey,
  fontSize: 15,
},
register_view:{height: 40, justifyContent: 'center'},
register_t:{
  alignSelf: 'center',
  color: colors.grey,
  fontSize: 15,
  marginBottom:5
},
register_text:{color: colors.blue},
sign_social:{
  color: colors.grey,
  fontSize: 15,
  flex:1,
  backgroundColor:"red",
},


},

));
