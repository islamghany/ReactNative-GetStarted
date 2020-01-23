import React,{useState} from 'react';
import {Text,View ,StyleSheet,TextInput} from 'react-native';

const TextScreen=()=>{
  const [name,setName]=useState('');
  return <View>
  <TextInput
   style={styles.input}
   autoCapitalize="none"
   autoCorrect={false}  
   onChangeText={(e)=>setName(e)}
   value={name} />
   <Text style={styles.text}>welcom {name}</Text>
  </View>
}
const styles = StyleSheet.create({
  input:{
     margin:10,
     borderWidth:1,
     borderColor:'#222',
     padding:4,
     borderRadius:15,
     paddingLeft:6    
  },
   text:{
     margin:"10 4",
     fontSize:20,
     
   }
})
export default TextScreen;