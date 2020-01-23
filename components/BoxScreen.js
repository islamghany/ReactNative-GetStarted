import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const BoxScreen = ()=>{
  return <View style={styles.view}>
  <Text style={styles.text1}>Box 1</Text>
   <Text style={styles.text2}>Box 2</Text>
    <Text style={styles.text3}>Box 3</Text></View>
}

const styles=StyleSheet.create({
  view:{
      borderWidth:1,
      borderColor:"black",
      marginTop:20,      
      height:100,
      justifyContent:"center"
  },
  text1:{          
      borderWidth:1,
      borderColor:"yellow",
  },
  text2:{    
      alignSelf:"flex-end",
      borderWidth:1,
      borderColor:"yellow",
  },
  text3:{        
      borderWidth:1,
      borderColor:"yellow",
  }
})

export default BoxScreen