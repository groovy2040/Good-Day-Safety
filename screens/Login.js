import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//formik
import { Formik } from 'formik';

import { 
    InnerContainer,
    StyledContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea
} from '../components/styles';

//const Login = () => {
function Login({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/favicon.png')} />
                <PageTitle>Good Day App</PageTitle>
                <Subtitle>Account Login</Subtitle>
                <Subtitle>Hello Luke Again!</Subtitle>
                <Subtitle>Reading</Subtitle>
                <Subtitle>Test</Subtitle>
                <Subtitle>Project Development</Subtitle>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                />
            </InnerContainer>
            <Button title="Go to Details" onPress={() => navigation.navigate('Modules')}/>
        </StyledContainer>
        
    
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

// Code for the page logo
//<PageLogo resizeMode="cover" source={require('./../assets/img/img1.png')} />

export default Login;