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

function Form7({ navigation }) {
    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>SUCCESS!</PageTitle>
                <Subtitle>Thank you for your submission! We appreciate your joint effort in creating a safe work environment for everyone!</Subtitle>
            </InnerContainer>
            <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Home')}>
                    <Text style={designs.loginText}>Back To Home</Text>
            </TouchableOpacity>
        </View>
    )

    submit = () => {
        alert('This Report has been sent successfully!');
    };
}
//this.submit for making an alert
export default Form7;