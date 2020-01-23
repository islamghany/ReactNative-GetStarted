import React from 'react';
import {View,StyleSheet } from 'react-native';
import ImageDetails from './ImageDetails';

const ImageScreen =()=>{
  return <View>
    <ImageDetails imgURL="https://images.pexels.com/photos/3577339/pexels-photo-3577339.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" title="magono" />
    <ImageDetails imgURL="https://images.pexels.com/photos/3588650/pexels-photo-3588650.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" title="freedom" />
    <ImageDetails imgURL="https://images.pexels.com/photos/3584443/pexels-photo-3584443.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" title="los an" />
  </View>
}
export default ImageScreen;