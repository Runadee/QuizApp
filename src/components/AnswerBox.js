import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCorrectAnswer, setIncorrectAnswer } from '../redux/dataSlice'



const AnswerBox = (props) => {

  const { currentQuestionIndex } = useSelector(state => state.data)

  const dispatch = useDispatch()

  const answers = props.sendData

  const inCorrectAnswer = answers[currentQuestionIndex]?.incorrect_answers

  const correctAnswer = answers[currentQuestionIndex]?.correct_answer

  const array = answers && inCorrectAnswer && [correctAnswer, ...inCorrectAnswer]

  const shuffledArray = array?.sort(()=> Math.random() - 0.5)

  const handleOnPress = (value) => {
      const checkIfTrue = value === correctAnswer

      checkIfTrue
              ?  dispatch(setCorrectAnswer())
              :  dispatch(setIncorrectAnswer())
  }



  return (
    <View style={styles.container} >
      {
        shuffledArray?.map((value,index) =>{
          return(
            <Pressable 
            onPress={()=> handleOnPress(value)}
            style={({pressed})=> [{
              transform:[{scale: pressed ? 0.95 :1 }]
            },
            styles.buttonStyle]} 
            key={index} >

                <Text style={styles.optionsText} >{value} </Text>
      
            </Pressable>
          )
        })
      }

   
   

    </View>
  )
}

export default AnswerBox

const styles = StyleSheet.create({
  container:{
    width:'100%'
  },

  buttonStyle:{
    borderWidth:0.17,
    width:'100%',
    backgroundColor:'#E5E0FF',
    borderRadius:10,
    padding:10,
    margin:5,
    alignItems:'center'

  },
  optionsText:{
    fontWeight:'bold',

  }
})