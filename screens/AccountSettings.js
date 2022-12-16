import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View } from 'react-native';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
} from '../components/styles';

/*
    This page will allow a logged in user to manage all of their account settings.
*/
function AccountSettings({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Account Settings</PageTitle>
                <Text>{'\n'}</Text>
                <Button title="Invite ID Management" onPress={() => navigation.navigate('Invite ID Management')}/>
                <Text>{'\n'}</Text>
                <Button title="Report Receipt Designees"/>
                <Text>{'\n'}</Text>
                <Button title="Account Settings"/>
                <Text>{'\n'}</Text>
                <Button title="Subscribe for functionality"/>
            </InnerContainer>
        </StyledContainer>
    )
}

export default AccountSettings;