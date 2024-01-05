import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home , Progress} from '../screens';
import { Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarStyle:{
        backgroundColor:"#8EA7E9"
      }
      }} >

      <Tab.Screen 
      name="Home" 
      component={Home}
      options={{
        tabBarIcon:({focused})=>(
           <AntDesign name="home" size={focused ? 27 : 24} 
           color={focused ? "#363062" : "white"} />
        )
      }} />

      <Tab.Screen 
      name="Progress" 
      component={Progress} 
      options={{
        tabBarIcon:({focused}) => (
          <MaterialIcons 
            name='leaderboard'
            size={focused ? 27 : 24}
            color={focused ? "#363062" : "white"}
          />
        )
      }}
      />

    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})