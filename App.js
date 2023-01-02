import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';

//The Screens for the Navigator
import Login from './screens/Login'
import CreateAccount from './screens/CreateAccount'
import Reports from './screens/Reports'
import AccountSettings from './screens/AccountSettings'
import Invites from './screens/Invites'
import Subscription from './screens/Subscription'
import DesignatedAdmins from './screens/DesignatedAdmins'
import AccountDetails from './screens/AccountDetails'
import Form0 from './screens/Form0'
import Form1 from './screens/Form1'
import Form2 from './screens/Form2'
import Form3 from './screens/Form3'
import Form4 from './screens/Form4'
import Form5 from './screens/Form5'
import Form6 from './screens/Form6'
import Form7 from './screens/Form7'
import Loginpage from './screens/Loginpage'

const Stack = createNativeStackNavigator();

/*
  pickImageAsync - Lets users pick an image when called in a screen
  Stack.Navigator - sets the initial page the app loads onto the Login screen the Login screen
  Stack.Screen - allows the page to be used in the navigator
*/
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Login page" component={Loginpage} />
        <Stack.Screen name="Create an Account" component={CreateAccount} />
        <Stack.Screen name="Account Settings" component={AccountSettings} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="Invite ID Management" component={Invites} />
        <Stack.Screen name="Subscription Management" component={Subscription} />
        <Stack.Screen name="Designated Admins" component={DesignatedAdmins} />
        <Stack.Screen name="Account Details" component={AccountDetails} />
        <Stack.Screen name="Form Start" component={Form0} />
        <Stack.Screen name="Condition" component={Form1} />
        <Stack.Screen name="Location" component={Form2} />
        <Stack.Screen name="Specify" component={Form3} />
        <Stack.Screen name="Photo" component={Form4} />
        <Stack.Screen name="Comments" component={Form5} />
        <Stack.Screen name="Confirm" component={Form6} />
        <Stack.Screen name="Success" component={Form7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;