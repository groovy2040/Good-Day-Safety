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
function Reports({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Reports</PageTitle>
                <Button title="Settings" onPress={() => navigation.navigate('Account Settings')}/>
            </InnerContainer>
        </StyledContainer>
    )
}

export default Reports;