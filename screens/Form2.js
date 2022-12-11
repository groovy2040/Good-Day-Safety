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
    TextBoxStyle,
    keyboardViewContainer
} from '../components/styles';

function Form2({ navigation }) {
    const [text, onChangeText] = React.useState();

    return (
        <StyledContainer>
            <ScrollView>
            <KeyboardAwareScrollView>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Please specify the location of the unsafe condition</PageTitle>
                <TextInput
                    style={TextBoxStyle.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Please specify here"
                    multiline
                    maxLength={200} />
            </InnerContainer>
            <Button title="Next" onPress={() => navigation.navigate('Specify')} />
            </KeyboardAwareScrollView>
            </ScrollView>
        </StyledContainer>
    )
}

export default Form2;