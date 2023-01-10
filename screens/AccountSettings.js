import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TouchableOpacity } from 'react-native';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    designs
} from '../components/styles';

/*
    This page will allow a logged in user to manage all of their account settings.
*/
function AccountSettings({ navigation }) {
    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Account Settings</PageTitle>
                <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Invite ID Management')}>
                    <Text style={designs.loginText}>Invite ID Management</Text>
                </TouchableOpacity>
                <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Designated Admins')}>
                    <Text style={designs.loginText}>Report Receipt Designees</Text>
                </TouchableOpacity>
                <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Account Details')}>
                    <Text style={designs.loginText}>Account Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Subscription Management')}>
                    <Text style={designs.loginText}>Subscribe for functionality</Text>
                </TouchableOpacity>
            </InnerContainer>
        </View>
    )
}

export default AccountSettings;