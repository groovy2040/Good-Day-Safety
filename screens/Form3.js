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

function Form3({ navigation }) {
    const [text, onChangeText] = React.useState();

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Please specify the type of unsafe condition{"\n"}{"\n"}</PageTitle>
                <TextInput
                    style={TextBoxStyleBig.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Please specify here"
                    multiline
                    maxLength={200} />
            </InnerContainer>
            <Button title="Next" onPress={() => navigation.navigate('Photo')}/>
        </StyledContainer>
    )
}

export default Form3;