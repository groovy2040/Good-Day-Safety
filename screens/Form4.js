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

function Form4({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Attach a photo of the unsafe condition *</PageTitle>
                <Subtitle>* This step is optional, but recommended for proof</Subtitle>
            </InnerContainer>
            <Button title="Next" onPress={() => navigation.navigate('Comments')}/>
        </StyledContainer>
    )
}

export default Form4;