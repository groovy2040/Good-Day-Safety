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

/*
    This page will allow the logged in user to manage their modules.
*/
function Modules({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Modules</PageTitle>
                <Button title="Test Module" onPress={() => navigation.navigate('Account Settings')}/>
            </InnerContainer>
            <Button title="Go to The Anonymous Report Form" onPress={() => navigation.navigate('Form Start')}/>
        </StyledContainer>
    )
}

export default Modules;