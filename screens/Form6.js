import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TouchableOpacity } from 'react-native';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    designs
} from '../components/styles';
import { getData } from '../utils/storage';
import react from 'react';

function Form6({ navigation }) {



    const [data, setData] = useState({})
    getData('form1answer').then(data1 => {
    getData('form2answer').then(data2 => {
        getData('form3answer').then(data3 => {
        getData('form5answer').then(data5 => {
            setData({...data1, ...data2, ...data3,  ...data5})
        })
    })
   })
})
    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Confirm your responses:</PageTitle>
                <Text>1. Can you make this a <Text style={designs.boldText}>safe condition: </Text>{data.choice}</Text>
                <Text>2. <Text style={designs.boldText}>Project Name: </Text>{data.project}</Text>
                <Text>3. <Text style={designs.boldText}>Project Floor: </Text>{data.floor}</Text>
                <Text>4. <Text style={designs.boldText}>Section Area: </Text>{data.section}</Text>
                <Text>5. <Text style={designs.boldText}>Unsafe Conditions: </Text>{data.condition}</Text>
                <Text>6. <Text style={designs.boldText}>Comments: </Text>{data.answer}</Text>
            </InnerContainer>
            <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Success')}>
                    <Text style={designs.loginText}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Form6;