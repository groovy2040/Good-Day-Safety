import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View } from 'react-native';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea
} from '../components/styles';

function Form7({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>{'\n'}{'\n'}{'\n'}SUCCESS!</PageTitle>
                <Subtitle>{'\n'}Thank you for your submission!</Subtitle>
                <Subtitle style={{padding: 60}}>{'\n'}We appreciate your joint effort in creating a safe work environment for everyone!</Subtitle>
            </InnerContainer>
            <Button title="Back To Home" onPress={() => navigation.navigate('Home')}/>
        </StyledContainer>
    )
}

export default Form7;