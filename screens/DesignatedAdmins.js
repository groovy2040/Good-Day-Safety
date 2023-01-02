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
    This page will allow the user to create an account to use the app.
*/
function DesignatedAdmins({ navigation }) {
    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Designated Admins</PageTitle>
            </InnerContainer>
            <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('')}>
                    <Text style={designs.loginText}>Add Admin</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default DesignatedAdmins;