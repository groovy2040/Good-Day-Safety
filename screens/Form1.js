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
                <PageTitle>Form1</PageTitle>
            </InnerContainer>
            <Button title="Go to Details" onPress={() => navigation.navigate('Form1')}/>
        </StyledContainer>
    )
}

export default Form1;