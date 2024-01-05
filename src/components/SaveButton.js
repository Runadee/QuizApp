import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { saveScore} from '../redux/dataSlice'

const SaveButton = () => {

  const dispatch = useDispatch()

 const  handleOnPress = () => {
      dispatch(saveScore())
  }

  return (
    <Pressable
    style={({pressed}) => [{
        transform:[{scale: pressed  ? 0.95 :  1 }]
    } ,styles.saveButton
    ]}
     onPress={handleOnPress}
     >
      <Text style={styles.text} >Save</Text>
    </Pressable>
  )
}

export default SaveButton

const styles = StyleSheet.create({
  saveButton:{
    width:"30%",
    backgroundColor:"#7286D3",
    paddingVertical:12,
    borderRadius:10,
    marginVertical:17,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    fontSize:15,
    fontWeight:'bold',
    color:"white",
  }
})