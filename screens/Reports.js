import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import { auth } from "../components/firebase";

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    designs
} from '../components/styles';

/*
    This page will allow the logged in user to manage their modules.
*/
function Reports({ navigation }) {


    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
        navigation.replace("Login page")
        })
        .catch(error => alert(error.message))
    }

    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Reports</PageTitle>
                <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Account Settings')}>
                    <Text style={designs.loginText}>Settings</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={designs.Button} onPress={(handleSignOut)}>
                    <Text style={designs.loginText}>Sign out</Text> 
                </TouchableOpacity>
            </InnerContainer>
        </View>

        
    )
     
}

export default Reports;