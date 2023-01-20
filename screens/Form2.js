import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { storeData, getData } from '../utils/storage';
import isEmpty from '../utils/isEmpty';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    TextBoxStyle,
    designs
} from '../components/styles';


function Form2({ navigation }) {
    const [data, setData] = useState({})

    useEffect(() => {
        const fn = async () => {
            const data = await getData('form2answer');
            setData(data || {})
        }
        
        const unsubscribe = navigation.addListener('focus', () => {
            fn();
        });
        return unsubscribe;

    }, [navigation]);

    useEffect(() => {
        if(!isEmpty(data)) {
            storeData('form2answer', data)
        }
    }, [data])

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View style={designs.container}>
                <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Please specify the location of the unsafe condition</PageTitle>
                <Subtitle>Project Name:</Subtitle>
                <View style={{...designs.inputView, marginBottom: 0, marginTop: 10}}>
                    <TextInput
                    style={designs.TextInput}
                    value={data.project}
                    onChangeText={(project) => setData({...data, project})}
                    placeholder="Please specify here"
                    maxLength={50}
                    /> 
                </View>
                <Subtitle>Floor Number/Location:</Subtitle>
                <View style={{...designs.inputView, marginBottom: 0, marginTop: 10}}>
                    <TextInput
                    style={designs.TextInput}
                    numeric
                    value={data.floor}
                    onChangeText={(floor) => setData({...data, floor})}
                    placeholder="Please specify here"
                    keyboardType="numeric"
                    maxLength={50}
                    /> 
                </View>
                <Subtitle>Section Floor/Area (North, East, West, South):</Subtitle>
                <View style={{...designs.inputView, marginBottom: 0, marginTop: 10}}>
                    <TextInput
                    style={designs.TextInput}
                    value={data.section}
                    onChangeText={(section) => setData({...data, section})}
                    placeholder="Please specify here"
                    maxLength={50}
                    /> 
                </View>
            </InnerContainer>
            <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Specify')}>
                    <Text style={designs.loginText}>Next</Text> 
            </TouchableOpacity>
            </View>
        </ScrollView>
    
    )
}


export default Form2;