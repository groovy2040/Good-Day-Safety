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
    This page will allow the logged in user to view anonymous reports made by their invitees.
*/
function Invites({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Reports</PageTitle>
            </InnerContainer>
        </StyledContainer>
    )
}

export default Invites;