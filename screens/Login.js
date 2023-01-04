import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik';

import { 
    InnerContainer,
    StyledContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea,
    TextBoxStyle,
    designs
} from '../components/styles';

/*
    This function is the home page for the app.
    Create Account - Navigates to the account creation page.
    Login - If the login details are correct, it will log into the app and navigate to the modules page.
    Submit Invite ID - After submitting a valid invite ID, the user is navigated to the start of the report.
    PageLogo - Change the source for your specified image.
*/
function Login({ navigation }) {
    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/favicon.png')} />
                <PageTitle>Good Day App</PageTitle>
                <TouchableOpacity style={designs.loginBtn} onPress={() =>navigation.navigate('Create Account')}>
                    <Text style={designs.loginText}>Create Account</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={designs.loginBtn} onPress={() =>navigation.navigate('Login page')}>
                    <Text style={designs.loginText}>Login</Text> 
                </TouchableOpacity>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
                <View style={designs.inputView}>
                    <TextInput
                    style={designs.TextInput}
                    numeric
                    placeholder="Enter your Invite ID here"
                    keyboardType="numeric"
                    maxLength={6}
                    /> 
                </View>
                <TouchableOpacity style={designs.loginBtn} onPress={() =>navigation.navigate('Form Start')}>
                    <Text style={designs.loginText}>Submit Invite ID</Text> 
                </TouchableOpacity>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                />
            </InnerContainer>
        </View>
        
    
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Login;