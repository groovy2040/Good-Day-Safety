import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RNTextArea from "@freakycoder/react-native-text-area";

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    TextBoxStyleBig,
    designs,
    AreaText
} from '../components/styles';

//do a textarea instead of a textinput
function Form5({ navigation }) {
    const [text, onChangeText] = React.useState();

    return (
        <KeyboardAvoidingView
            behavior="padding"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{alignItems:"center"}}>
                    <StatusBar style="dark" />
                        <PageTitle>Are there any other comments you would like to make?{"\n"}{"\n"}</PageTitle>
                        <RNTextArea
                            style={AreaText.textArea}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Add Comments Here"
                            multiline={true}
                            maxLength={200}
                        /> 
                    <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Confirm')}>
                            <Text style={designs.loginText}>Next</Text> 
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Form5;