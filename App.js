import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Login from './src/screens/Login'; 
import {AsyncStorage} from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component = {Login}/>
        <Stack.Screen name="Home" component = {HomeScreen} options = {{headerShow: false}} />
        <Stack.Screen name="Details" component = {DetailsScreen} />
        <Stack.Screen name="Profile" component = {ProfileScreen} options = {{headerShow: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
