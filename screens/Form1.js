import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    CheckBox,
    designs
} from '../components/styles';

//Still a work in progress!
function Form1({ navigation }) {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Can you make this a SAFE condition?</PageTitle>
                <Subtitle>If possible, please ensure that this condition is not accessible by others and proceed with your report.{"\n"}{"\n"}</Subtitle>
                <View style={CheckBox.section}>
                    <Checkbox
                    style={CheckBox.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#012d90' : false}
                    />
                    <Text style={CheckBox.paragraph}>Yes, I can make this a safe condition.</Text>
                </View>
                <View>
                    <Text>{"\n"}</Text>
                    <View style={CheckBox.section}>
                    <Checkbox
                    style={CheckBox.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#012d90' : false}
                    />
                    <Text style={CheckBox.paragraph}>No, I cannot make this a safe condition.</Text>
                </View>
                </View>
            </InnerContainer>
            <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Location')}>
                    <Text style={designs.loginText}>Next</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Form1;