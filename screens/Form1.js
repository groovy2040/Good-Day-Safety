import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View } from 'react-native';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    CheckBox
} from '../components/styles';

function Form1({ navigation }) {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Can you make this a SAFE condition? *</PageTitle>
                <Subtitle>* if possible, please ensure that this condition is not accessible by others and proceed with your report.</Subtitle>
                <View style={CheckBox.section}>
                    <Checkbox
                    style={CheckBox.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#012d90' : false}
                    />
                    <Text style={CheckBox.paragraph}>Yes, i can make this a safe condition.</Text>
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
                    <Text style={CheckBox.paragraph}>No, i cannot make this a safe condition.</Text>
                </View>
                </View>
            </InnerContainer>
            <Button title="Next" onPress={() => navigation.navigate('Location')}/>
        </StyledContainer>
    )
}

export default Form1;