import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//The Screens for the Navigator
import Login from './screens/Login'
import Modules from './screens/Modules'
import Form1 from './screens/Form1'

const Stack = createNativeStackNavigator();

/*export default function App() {
  return <Login />;
  return <RootStack/>;
}*/

/*
  Stack.Navigator sets the initial page the app loads onto the Login screen

*/
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Modules" component={Modules} />
        <Stack.Screen name="Form1" component={Form1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;