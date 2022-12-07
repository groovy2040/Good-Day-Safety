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

function Form6({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Confirm your responses:</PageTitle>
            </InnerContainer>
            <Button title="Submit" onPress={() => navigation.navigate('Success')}/>
        </StyledContainer>
    )
}

export default Form6;