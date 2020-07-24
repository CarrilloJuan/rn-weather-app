import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Colors from '../../../constants/Colors';

export default function MenuButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      testID="menu-button">
      <Icon name="menu" size={30} color={Colors.dark} />
    </TouchableOpacity>
  );
}
