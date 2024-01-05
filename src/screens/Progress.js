import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React ,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getScoresStorage, setClearData } from '../redux/progressSlice'
import { HistoryFlatList } from '../components'

const Progress = () => {

  const dispatch = useDispatch()

  const {scores} = useSelector(state => state.progress)

  useEffect(() => {
   dispatch(getScoresStorage())

  }, [])

  useEffect(() => {
    dispatch(setClearData())
    
  }, [])
  

 
  
  
  return (
    <SafeAreaView style={styles.container} >

      <Text style={styles.title} >Score History</Text>

      <HistoryFlatList  scoreData={scores}  />


    </SafeAreaView>
  )
}
  


export default Progress

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontWeight:'bold',
    fontSize:17,
    fontStyle:"italic",
    marginVertical:'20'
  }
})