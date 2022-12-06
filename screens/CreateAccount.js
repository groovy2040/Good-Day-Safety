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

function CreateAccount({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Create an Account</PageTitle>
            </InnerContainer>
            <Button title="Create Account" onPress={() => navigation.navigate('Home')}/>
        </StyledContainer>
    )
}

export default CreateAccount;