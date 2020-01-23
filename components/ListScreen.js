import React from 'react';
import {Text,StyleSheet,FlatList} from 'react-native';


const ListScreen=()=>{
  const friends=[
    {name:'Friend #1 age 20'},
    {name:'Friend #2 age 20'},
    {name:'Friend #3 age 20'},
    {name:'Friend #4 age 21'},
    {name:'Friend #5 age 20'},
    {name:'Friend #6 age 20'},
    {name:'Friend #7 age 202'},
    {name:'Friend #8 age 20'},
    {name:'Friend #9 age 20'},
    
  ]
  return <FlatList 
    keyExtractor={(friend)=>friend.name}
    data={friends} renderItem={({item})=>{
    return <Text style={styles.textStyle}>{item.name}</Text>
  }} />
}
const styles = StyleSheet.create({
  textStyle:{
    padding:10,
    border:'1px solid red',
    width:"60%",
    margin:"0 auto",
    backgroundColor:"#FAFAFA"
  }
})
export default ListScreen;