// App.js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Index from './src/apps/index'
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
 const [isLoaded, setIsLoaded] = useState(false);

 useEffect(() => {
   setTimeout(() => {
     setIsLoaded(true);
   }, 3000); // 3 seconds delay
 }, []);

 return (
   <>
     {isLoaded ? <Index/> : <SplashScreen />}
   </>
 );
};

export default App;
