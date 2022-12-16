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

function Form2({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Please specify the location of the unsafe condition</PageTitle>
                <Subtitle>Project Name:</Subtitle>
                <Subtitle>Floor Number:</Subtitle>
                <Subtitle>Section of the Floor (North, East, West, South):</Subtitle>
            </InnerContainer>
            <Button title="Next" onPress={() => navigation.navigate('Specify')}/>
        </StyledContainer>
    )
}

export default Form2;