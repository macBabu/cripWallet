// screens/SplashScreen.js
import React from 'react';
import MainLoad from '../../src/assets/images/loadImages/mainload.png'

import { View, Text, StyleSheet,Image } from 'react-native';

const SplashScreen = () => {
 // Add your splash screen design here
 return (
   <View style={styles.container}>
      <Image
          source={MainLoad}
          style={{width: 200, height: 200}}
        />
   </View>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: "black"
 },
});

export default SplashScreen;
