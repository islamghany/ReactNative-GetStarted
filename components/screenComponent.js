import React from 'react';
import {Text , StyleSheet,View} from 'react-native';


const ScreenComponent=()=>{
  const myName=<Text style={{fontSize:20,
  textTransform:"capitalize",
  color:"#fff",
  backgroundColor:"#4630EB",
  textAlign:"center",
  marginTop:5,
  width:"80%",
  margin:"auto",
  borderRadius:10,
  padding:4
  
  }}>my name is islam mostafa</Text>
      return <View>
      <Text style={style.textStyle}>getting started whith react native</Text>
      {myName}
      </View>
}

const style = StyleSheet.create({
  textStyle:{
     fontSize:40      
  }
});
export default ScreenComponent;