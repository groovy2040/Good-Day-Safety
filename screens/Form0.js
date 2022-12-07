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


//Return is to display the screen, anything else can be written within the function, but outside of the return
function Form0({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Click START to begin your report!</PageTitle>
                <Subtitle>This report will be completely anonymous. Your identity will not be traceable.</Subtitle>
            </InnerContainer>
            <Button title="Start" onPress={() => navigation.navigate('Condition')}/>
        </StyledContainer>
    )
}

export default Form0;