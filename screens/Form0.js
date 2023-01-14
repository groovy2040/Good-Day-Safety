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


//Return is to display the screen, anything else can be written within the function, but outside of the return
function Form0({ navigation }) {
    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Click START</PageTitle>
                <Subtitle>This report will be completely anonymous. Your identity will not be traceable.</Subtitle>
            </InnerContainer>
            <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Condition')}>
                    <Text style={designs.loginText}>Start</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Form0;