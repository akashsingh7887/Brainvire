import {StyleSheet} from 'react-native';
import * as globals from '../../lib/globals';
import * as colors from '../../assets/colors/colors';
export default (styles = StyleSheet.create({
    drawer_content:{
        height: 70,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 30,
        alignItems: 'center',
      },
      drawer_text:{fontSize: 20, color: colors.white},
      container:{flex: 1, backgroundColor: colors.blue}
}));
