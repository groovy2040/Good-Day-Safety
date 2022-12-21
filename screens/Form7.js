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
                <PageTitle>SUCCESS!</PageTitle>
                <Subtitle>Thank you for your submission! We appreciate your joint effort in creating a safe work environment for everyone!</Subtitle>
            </InnerContainer>
            <Button title="Back To Home" onPress={() => navigation.navigate('Home')}/>
        </StyledContainer>
    )

    submit = () => {
        alert('This Report has been sent successfully!');
    };
}
//this.submit for making an alert
export default Form7;