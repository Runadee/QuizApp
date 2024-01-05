import { StyleSheet, Text, View , Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoryButton = (props) => {

    const navigation = useNavigation()

    const item = props.item
    const index = props.index

    const categoryName = item.name

    const handleOnPress = () => {
        navigation.navigate('QuizPage', {
            categoryID: item.id
        })
    }


  return (
    <Pressable
    style={({pressed}) => [{

        transform:[{scale: pressed ? 0.90  : 1 }],

        backgroundColor:"#E5E0FF"

    }, styles.buttonStyle]}
    onPress={()=> handleOnPress()}
    >

      <Text style={styles.buttonText} > {categoryName} </Text>

    </Pressable>
  )
}

export default CategoryButton

const styles = StyleSheet.create({
    buttonStyle:{
        width:150,
        height:150,
        borderWidth:0.2,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        padding:5,
        margin:6,
        
    },
    buttonText:{
        fontWeight:"bold",
        //color:"#7286D3",
       
    }
})