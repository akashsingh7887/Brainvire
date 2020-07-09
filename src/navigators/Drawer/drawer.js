import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import _Text from '../../components/Text/_Text';
import * as colors from '../../assets/colors/colors';
import Icons from 'react-native-vector-icons/FontAwesome5';
import styles from "./styles"
const DATA = [
  {
    title: "Men's wear",
    subGroups: ['Wallets and Bags', 'Pants', 'Shirts', 'Shoes'],
  },
  {
    title: "Women's wear",
    subGroups: ['Wallets and Bags', 'Western', 'Jewellery'],
  },
  {
    title: 'Accesories',
    subGroups: ['Bracelets', 'Watches', 'Shirts', 'Shoes'],
  },
  {
    title: 'Track order',
    subGroups: [],
  },
  {
    title: 'Account details',
    subGroups: [],
  },
  {
    title: 'Settings',
    subGroups: [],
  },
  {
    title: 'Sign out',
    subGroups: [],
  },
];

export default class drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openbelow: [],
      openbelowIndex: null,
    };
  }
  renderItems = (item, index) => {
    var oprnD = [...this.state.openbelow];
    return (
      <View
        style={[
          styles.drawer_content,
          index != DATA.length - 1
            ? {borderBottomColor: colors.white, borderBottomWidth: 0.3}
            : null,
        ]}>
        <_Text style={styles.drawer_text}>{item.title}</_Text>
        {item.subGroups.length > 0 && (
          <Icons name="plus" color={colors.white} onPress={() => {}} />
        )}
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <FlatList
            data={DATA}
            renderItem={({item, index}) => this.renderItems(item, index)}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
