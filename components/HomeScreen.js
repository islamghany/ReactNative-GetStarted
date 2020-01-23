import React from 'react';
import { Text, StyleSheet,View,Button ,TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
  const {navigation}=props;
  return <View>
      <Text style={styles.text}>Hi There</Text>
        <Button
        onPress={()=>{
          navigation.navigate('Component')
        }}
         title="go to component demo"/>
         <Button 
         onPress={()=>{
           navigation.navigate('List')
         }} title="go to list"/>
          <Button 
         onPress={()=>{
           navigation.navigate('Image')
         }} title="go to Images"/>
         <Button 
         onPress={()=>{
           navigation.navigate('Counter')
         }} title="go to Counter"/>
          <Button 
         onPress={()=>{
           navigation.navigate('Color')
         }} title="go to color"/>
          <Button 
         onPress={()=>{
           navigation.navigate('Text')
         }} title="go to Text demo"/>
          <Button 
         onPress={()=>{
           navigation.navigate('Box')
         }} title="go to Box demo"/>
       
      </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default HomeScreen;