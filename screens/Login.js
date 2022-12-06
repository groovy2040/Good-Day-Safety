import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik';

import { 
    InnerContainer,
    StyledContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea
} from '../components/styles';

/*
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
                <Button title="Create Account" onPress={() => navigation.navigate('Login')}/>
                <Text>{'\n'}</Text>
                <Button title="Login" onPress={() => navigation.navigate('Modules')}/>
                <Text>{'\n'}</Text>
                <Button title="Submit Invite ID" onPress={() => navigation.navigate('Condition')}/>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                />
            </InnerContainer>
            <Button title="Go to Modules" onPress={() => navigation.navigate('Modules')}/>
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