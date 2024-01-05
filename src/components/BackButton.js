import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { setClearData } from '../redux/dataSlice';


const BackButton = () => {

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleOnPress = () => {
      dispatch(setClearData())

      navigation.navigate('Tabs', {
        screen: "Home",
      })
  }
  return (
    <Pressable
    onPress={handleOnPress}
    style={({pressed}) => [styles.container, {
        transform: [{ scale: pressed ? 0.95 : 1}]
    }]}  >
      <AntDesign name="leftcircleo" size={30} color="#6F61C0" />
      
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
  container:{
      position:'absolute',
      top:70,
      left:27
  }
})