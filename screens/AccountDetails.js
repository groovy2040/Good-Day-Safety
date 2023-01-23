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
function AccountDetails({ navigation }) {
    let [email,setEmail] = useState('')
    useEffect(()=>{
        getData('email').then(data=>setEmail(data))
    },[])
    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Account Details</PageTitle>
                <View style={{display:'flex', flexDirection:'row'}}><Text style={designs.boldText}>Email Address:</Text><Text> {email}</Text></View>
                
            </InnerContainer>
        </View>
    )
}

export default AccountDetails;