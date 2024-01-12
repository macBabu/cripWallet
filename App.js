import React from "react";
import {Text , View,SafeAreaView , StyleSheet} from "react-native"


const App = ()=>{

  return (
    <View style={styles.mainCont}>

      <View style={{backgroundColor:"green",flex:2}}/>
      <View style={{backgroundColor:"red",flex:1}}/>

  </View>
)

}


const styles = StyleSheet.create({

  mainCont:{
    flex:1,
    flexDirection:"row",
  }

})


export default App;