import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React ,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadingPage, QuestionBox, AnswerBox, SaveButton, BackButton } from '../components'
import { getQuestionsData } from '../redux/dataSlice'
import { LinearGradient } from 'expo-linear-gradient';


const QuizPage = ({navigation, route}) => {

  const dispatch = useDispatch();

  const { questions, isLoading } = useSelector( state => state.data)

  const getCategoryID = route.params.categoryID

  useEffect(() => {

     dispatch(getQuestionsData(getCategoryID))

  }, [])


  

  if(isLoading){
    return <LoadingPage/>
  }


  return (
    <LinearGradient 
      style={styles.container}
      colors={[ "#7286D3","#FFF2F2" ]} >

      <QuestionBox
      sendData={questions} />

      <AnswerBox
      sendData={questions} />

      <SaveButton />

      <BackButton />


    </LinearGradient>
  )
}

export default QuizPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    padding:10,
  }
})