// App.js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import WalletMainScreen from '../../src/screens/walletMainScreen/walletScreen.jsx'

const Index = () => {
 const [isLoaded, setIsLoaded] = useState(false);

 useEffect(() => {
   setTimeout(() => {
     setIsLoaded(true);
   }, 3000); // 3 seconds delay
 }, []);

 return (
     <SafeAreaView style={styles.mainCont}>
<WalletMainScreen/>
   </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 mainCont: {
   flex: 1,
   flexDirection: 'column',
 },
});

export default Index;
