import React,{useState} from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity } from 'react-native';

import Gear from '../walletScreenImg/Frame1.png'
import BoardSign from "../walletScreenImg/Frame4.png"
import CopySign from "../walletScreenImg/Frame3.png"
import GrowthSign from "../walletScreenImg/Frame2.png"

import Button1 from "../walletScreenImg/b1.png"
import Button2 from "../walletScreenImg/b2.png"
import Button3 from "../walletScreenImg/b3.png"
import Button4 from "../walletScreenImg/b4.png"


const WalletScreen = ()=>{

  const [selectedTab, setSelectedTab] = useState('');


return (
<>
<View style={styles.mainCont}>

 {/* top start */}

<View style={styles.sub1Cont}>

<View style={{backgroundColor:"black",flex:7,justifyContent:"center",alignItems:"center"}}>
  {/* <Image
     source={BoardSign}
     style={{marginLeft:20}}
  /> */}
  </View>

<View style={{flex:1,backgroundColor:"black",justifyContent:"center",alignItems:"center"}}>
<Image
  source={Gear}
/>
</View>

</View>

 {/* top end */}


 {/* mid starts */}

<View style={styles.sub2Cont}>


<View style={{flex:1,backgroundColor:"black",flex:2,flexDirection:"row"}}>


<View style={{flex:1,flex:2,justifyContent:"center",alignItems:"center"}}>
  
<Text style={{fontSize:29,fontWeight:"800",color:"white"}} >WALLET 1</Text>
</View>

<View style={{flex:1,flex:2,flexDirection:"column",justifyContent:"center"}}>

  <Text style={{color:"grey"}}>0x8a2f..f4e4 
    <Image
    source={CopySign}
    /></Text>
 
  </View>
  
  </View>



<View style={{flex:1,backgroundColor:"black",flex:2}}>
  <Text style={{marginLeft:40,color:"white",fontSize:30}}>$0.00</Text>
  <Text style={{marginLeft:40,color:"white",fontSize:15}}>
    <Image
    source={GrowthSign}
    />
    0.00%</Text>

</View>


<View style={{flex:1,flexDirection:"row",backgroundColor:"black",flex:4,columnGap:30,justifyContent:"center",alignItems:"center"}}>

<Image 
  source={Button4}
  />
<Image 
  source={Button3}
  />
<Image 
  source={Button2}
  />
<Image 
  source={Button1}
  />

</View>



<View style={styles.container}>
     <TouchableOpacity onPress={() => setSelectedTab('Token')}>
       <Text style={[styles.text, selectedTab === 'Token' && styles.activeText]}>Token</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => setSelectedTab('Nfts')}>
       <Text style={[styles.text, selectedTab === 'Nfts' && styles.activeText]}>Nfts</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => setSelectedTab('Activity')}>
       <Text style={[styles.text, selectedTab === 'Activity' && styles.activeText]}>Activity</Text>
     </TouchableOpacity>
   </View>

</View>

 {/* mid end */}


<View style={styles.sub3Cont}>
  <Text style={{color:"white",fontSize:30,marginTop:40}}>Your Token</Text>
</View>


</View>

</>
)

}


const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    // flexDirection: 'column',
  },

  sub1Cont:{
    flex:2,
    flexDirection:"row"
  },

  sub2Cont:{
    flex:7,
  },

  sub3Cont:{
    flex:8,
    backgroundColor:"black",
    alignItems:"center"
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 20
  },
  text: {
    color: 'grey',
    fontSize: 23,
  },
  activeText: {
    color: '#5CF4FF',
  },

 });


export default WalletScreen;