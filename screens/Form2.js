import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    TextBoxStyle
} from '../components/styles';

function Form2({ navigation }) {
    const [text, onChangeText] = React.useState();

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Please specify the location of the unsafe condition</PageTitle>
                <Subtitle>Project Name:</Subtitle>
                <TextInput
                    style={TextBoxStyle.input}
                    value={text}
                    placeholder="Please specify here"
                    maxLength={50} />
                <Subtitle>Floor Number:</Subtitle>
                <TextInput
                    style={TextBoxStyle.input}
                    numeric
                    placeholder="Please specify here"
                    keyboardType="numeric"
                    maxLength={50} />
                <Subtitle>Section of the Floor (North, East, West, South):</Subtitle>
                <TextInput
                    style={TextBoxStyle.input}
                    value={text}
                    placeholder="Please specify here"
                    maxLength={50} />
            </InnerContainer>
            <Button title="Next" onPress={() => navigation.navigate('Specify')}/>
        </StyledContainer>
    )
}

export default Form2;