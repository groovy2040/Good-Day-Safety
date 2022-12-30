import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput } from 'react-native';
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
    TextBoxStyle
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
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/favicon.png')} />
                <PageTitle>Good Day App</PageTitle>
                <Text>{'\n'}</Text>
                <Button title="Create Account" onPress={() => navigation.navigate('Create an Account')}/>
                <Text>{'\n'}</Text>
                <Button title="Login" onPress={() => navigation.navigate('Reports')}/>
                <Text>{'\n'}</Text>
                <TextInput
                    style={TextBoxStyle.input}
                    numeric
                    placeholder="Enter your Invite ID here"
                    keyboardType="numeric"
                    maxLength={6} />
                <Text>{'\n'}</Text>
                <Button title="Submit Invite ID" onPress={() => navigation.navigate('Form Start')}/>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                />
            </InnerContainer>
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

export default Login;