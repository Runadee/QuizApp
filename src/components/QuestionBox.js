import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import he from 'he'
import { useSelector } from 'react-redux'

const QuestionBox = (props) => {

    const { currentQuestionIndex } = useSelector(state => state.data)

    const data = props?.sendData

    const getQuestion = data[currentQuestionIndex]?.question

    const decodedText = getQuestion && he.decode(getQuestion)

    
  return (
    <View style={styles.container} >
      <Text style={styles.questionText} >{decodedText}</Text>
    </View>
  )
}

export default QuestionBox

const styles = StyleSheet.create({
  container:{
    borderWidth:0.2,
    width:'100%',
    padding:20,
    backgroundColor:'#FFF2F2',
    borderRadius:10,
    margin:20,

  },
  questionText:{
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',

  }

})