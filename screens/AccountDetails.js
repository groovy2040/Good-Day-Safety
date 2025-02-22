import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View } from 'react-native';
import { getData } from '../utils/storage';
import UpdatePassword from '../components/UpdatePassword';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    designs
} from '../components/styles';


function AccountDetails({ navigation }) {
    
    let [email, setEmail] = useState('')
    useEffect(()=>{
        getData('email').then(data=>setEmail(data))
    },[])

    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Account Details</PageTitle>
                <View style={{display:'flex', flexDirection:'row'}}><Text style={designs.boldText}>Email Address:</Text><Text> {email}</Text></View>
                <UpdatePassword/>
            </InnerContainer>
        </View>
    )
}

export default AccountDetails;