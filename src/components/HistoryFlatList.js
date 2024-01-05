import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HistoryFlatList = (props) => {

    


  return (
    <View style={styles.container} >


      <FlatList 
        alwaysBounceVertical={false}
        style={styles.scoresContainer}  
        data={props.scoreData}
        keyExtractor={(item, index)=> index.toString}
        renderItem={({item})=>{

            const dateString = item.date

            const dateObject = new Date(dateString)

            const formattedDated = dateObject.toLocaleDateString()
            const formattedTime = dateObject.toLocaleTimeString()

            return(
                <View style={styles.scoresContainer} >
                    <Text style={styles.dateStyle} >Date: {formattedDated}     {formattedTime} </Text>
                    <Text style={{fontSize:14,
                                  color: item.score > 0 ? "green" : "red"
                    }} >           Score: {item.score} </Text>
                </View>
            )
        }}
      />
    </View>
  )
}

export default HistoryFlatList

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%"
    },
    scoresContainer:{
        width:"100%",
        backgroundColor:"#E5E0FF",
        borderBottomWidth:0.2,
        borderRadius:15,
        marginVertical:10,
        padding:10,
        paddingHorizontal:30,
        paddingVertical:15,
       // justifyContent:"space-around",
        flexDirection:'row'


    },
   
    dateStyle:{
        fontSize:14
    }
})