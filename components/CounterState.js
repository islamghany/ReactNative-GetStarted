import React,{useState,useReducer} from 'react';
import {Text,Button,StyleSheet,View} from 'react-native';

const reducer=(state,action)=>{
   switch(action.type){
     case 'increase':
       return {counter:state.counter+1};
     case 'decrease':
       return {counter:state.counter - 1};
     default : return state;    
   }
}

const CounterState =()=>{
  const [state,dispatch]=useReducer(reducer,{counter:0});
  return <View>
   <Button title="InCrease" onPress ={
     ()=>{dispatch({type:'increase'})}} />
   <Button title="DeCrease" onPress ={
     ()=>{dispatch({type:'decrease'})}} />
   <Text>Counter : {state.counter}</Text>
  </View>
}
export default CounterState;