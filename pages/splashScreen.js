import React from 'react';
import { View, Image } from 'react-native';
import {globalStyle} from '../globalStyle';

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 2000);

  return (
    <View style={globalStyle.root}>
      <Image
        style={globalStyle.logo}
        source={require('../assets/icon.png')}
      />
    </View>
  );
};

export default Splash;
