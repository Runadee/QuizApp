import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/tabs';
import { QuizPage } from './src/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const Stack = createNativeStackNavigator()


export default function App() {


  return (
    <Provider store={store} >

      <NavigationContainer>

        <Stack.Navigator screenOptions={{headerShown:false}} >

          <Stack.Screen  name='Tabs'  component={Tabs} />
          <Stack.Screen  name='QuizPage'  component={QuizPage} />

        </Stack.Navigator>
          
      </NavigationContainer>

    </Provider>
  );
}


