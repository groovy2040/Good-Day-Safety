import React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { storeData, getData } from '../utils/storage';
import isEmpty from '../utils/isEmpty';

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
    const [data, setData] = useState({})
    useEffect(() => {
        const fn = async () => {
            const data = await getData('form5answer');
            setData(data || {})
        }

        const unsubscribe = navigation.addListener('focus', () => {
            fn();
        });
        return unsubscribe;

    }, [navigation]);


    useEffect(() => {
        if (!isEmpty(data)) {
            storeData('form5answer', data)
        }
    }, [data])

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={designs.container}>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageTitle>Are there any other comments you would like to make?{"\n"}{"\n"}</PageTitle>
                    <View style={designs.inputViewLarge}>
                        <TextInput
                            style={designs.TextInput}
                            onChangeText={(comment) => setData({ ...data, comment })}
                            value={data?.comment}
                            placeholder="Add Comments Here"
                            multiline
                            maxLength={250}
                        />
                    </View>
                </InnerContainer>
                <TouchableOpacity style={designs.Comment} onPress={() => navigation.navigate('Confirm')}>
                    <Text style={designs.loginText}>Next</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Form5;