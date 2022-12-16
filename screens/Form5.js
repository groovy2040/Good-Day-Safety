import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput } from 'react-native';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    TextBoxStyleBig
} from '../components/styles';

function Form5({ navigation }) {
    const [text, onChangeText] = React.useState();

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Are there any other comments you would like to make?{"\n"}{"\n"}</PageTitle>
                <TextInput
                    style={TextBoxStyleBig.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Please specify here"
                    multiline
                    maxLength={200} />
            </InnerContainer>
            <Button title="Next" onPress={() => navigation.navigate('Confirm')}/>
        </StyledContainer>
    )
}

export default Form5;