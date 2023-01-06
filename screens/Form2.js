import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    TextBoxStyle,
    designs
} from '../components/styles';

function Form2({ navigation }) {
    const [text, onChangeText] = React.useState();

    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Please specify the location of the unsafe condition</PageTitle>
                <Subtitle>Project Name:</Subtitle>
                <View style={designs.inputView}>
                    <TextInput
                    style={designs.TextInput}
                    value={text}
                    placeholder="Please specify here"
                    maxLength={50}
                    /> 
                </View>
                <Subtitle>Floor Number:</Subtitle>
                <View style={designs.inputView}>
                    <TextInput
                    style={designs.TextInput}
                    numeric
                    placeholder="Please specify here"
                    keyboardType="numeric"
                    maxLength={50}
                    /> 
                </View>
                <Subtitle>Section of the Floor (North, East, West, South):</Subtitle>
                <View style={designs.inputView}>
                    <TextInput
                    style={designs.TextInput}
                    value={text}
                    placeholder="Please specify here"
                    maxLength={50}
                    /> 
                </View>
            </InnerContainer>
            <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Specify')}>
                    <Text style={designs.loginText}>Next</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Form2;