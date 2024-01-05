import { StyleSheet, Text, View , SafeAreaView, FlatList} from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryData } from '../redux/dataSlice'
import { CategoryButton } from '../components'
import { setClearData } from '../redux/progressSlice'


const Home = () => {

  const dispatch = useDispatch()

  const { categories, isLoading} = useSelector(state => state.data)

  useEffect(() => {
    
    dispatch(getCategoryData())
    
  }, [])

  useEffect(() => {
      dispatch(setClearData())
  }, [])
  

  if(isLoading){
    
  }
  


  return (
    <SafeAreaView style={styles.container} >

      <Text style={styles.title} >Quiz Time</Text>

      <View style={styles.flatlistContainer} >

          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={categories}
            keyExtractor={(item,index)=> index}
            renderItem={({item, index}) => {
              return(
                <CategoryButton  item={item} index={index} />
              )
            } }
            
          />
 

      </View>


    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    fontStyle:"italic"

  },
  flatlistContainer:{
    flex:1,
    width:"100%",
    paddingHorizontal:"9%",
    paddingTop:10,

  }
})