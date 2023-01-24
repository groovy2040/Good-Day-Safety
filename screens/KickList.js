import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View } from 'react-native';
import { getData } from '../utils/storage';

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
function KickList({ navigation }) {
   
    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Kick List</PageTitle>
            </InnerContainer>
        </View>
    )
}

export default KickList;