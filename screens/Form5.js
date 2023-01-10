import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { storeData } from '../utils/Storage';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    TextBoxStyleBig,
    designs
} from '../components/styles';

function Form5({ navigation }) {
    const [answer, setAnswer] = React.useState();

    storeData('form5answer', {answer})

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Are there any other comments you would like to make?{"\n"}{"\n"}</PageTitle>
                <View style={designs.inputViewLarge}>
                    <TextInput
                    style={designs.TextInput}
                    onChangeText={setAnswer}
                    value={answer}
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
        </ScrollView>
    )
}

export default Form5;