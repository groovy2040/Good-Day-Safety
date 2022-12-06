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

function Form3({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Please specify what type of unsafe condition</PageTitle>
            </InnerContainer>
            <Button title="Next" onPress={() => navigation.navigate('Photo')}/>
        </StyledContainer>
    )
}

export default Form3;