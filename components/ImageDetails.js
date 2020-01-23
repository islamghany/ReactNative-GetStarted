import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';

const ImageDetails=({imgURL,title})=>{
     return <View style={styles.view}>
      <Image 
       style={{width: '50%', height: 100}}
       source={{uri: imgURL}} />
      <Text>{title}</Text>
     </View>
}
const styles= StyleSheet.create({
  view:{
    padding:4,
    borderBottomColor:"red"

  }
})
export default ImageDetails;