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

function Form5({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Are there any other comments you would like to make?</PageTitle>
            </InnerContainer>
            <Button title="Next" onPress={() => navigation.navigate('Confirm')}/>
        </StyledContainer>
    )
}

export default Form5;