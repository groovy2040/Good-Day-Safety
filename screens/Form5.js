import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput, TouchableOpacity } from 'react-native';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    TextBoxStyleBig,
    designs
} from '../components/styles';

//do a textarea instead of a textinput
function Form5({ navigation }) {
    const [text, onChangeText] = React.useState();

    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Are there any other comments you would like to make?{"\n"}{"\n"}</PageTitle>
                <View style={designs.inputViewLarge}>
                    <TextInput
                    style={designs.TextInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Add Comments Here"
                    multiline
                    maxLength={200}
                    /> 
                </View>
            </InnerContainer>
            <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Confirm')}>
                    <Text style={designs.loginText}>Next</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Form5;