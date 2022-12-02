import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

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

const Login = () => {
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
                    <Subtitle>1</Subtitle>
                    <Subtitle>2</Subtitle>
                    <Subtitle>3</Subtitle>

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

// Code for the page logo
//<PageLogo resizeMode="cover" source={require('./../assets/img/img1.png')} />

export default Login;