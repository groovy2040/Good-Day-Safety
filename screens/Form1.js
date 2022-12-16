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

function Form1({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Can you make this a SAFE condition? *</PageTitle>
                <Subtitle>* if possible, please ensure that this condition is not accessible by others and proceed with your report.</Subtitle>
            </InnerContainer>
            <Button title="Next" onPress={() => navigation.navigate('Location')}/>
        </StyledContainer>
    )
}

export default Form1;