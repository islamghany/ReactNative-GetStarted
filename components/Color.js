import React,{useState} from 'react';
import {Text,Button,StyleSheet,FlatList,View} from 'react-native';

const ColorSelect=()=>{
  const [colors,setColors] = useState([]);
  return <View>
  <Button title="add a color" onPress={()=>{ 
    setColors([...colors , randomColor()])
  }}/>
  <FlatList keyExtractor={item=>item} data={colors} renderItem={({item})=>{
    return <View style={{
      width:100,
      height:100,
      backgroundColor:item
    }} >
    </View>
  }} />
  
  </View>
}
const randomColor=()=>{
  let red= Math.floor(Math.random() * 255);
  let green= Math.floor(Math.random() * 255);
  let blue= Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`   
}

export default ColorSelect;