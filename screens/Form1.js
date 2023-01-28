import React, { useState, useEffect } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { storeData, getData } from '../utils/storage';
import isEmpty from '../utils/isEmpty';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    CheckBox,
    designs
} from '../components/styles';



function Form1({ navigation }) {
    const [chosenOption, setChosenOption] = useState(); 
  const options = [
    { label: 'Yes', value: 0 },
    { label: 'No', value: 1},

  ];


    const [data, setData] = useState({})
    const  [dataReady, setDataReady] = useState(false);
    
    useEffect(() => {
        const fn = async () => {
            setDataReady(false)
            const data = await getData('form1answer');
            setData(data || {})
            setDataReady(true)
        }
        
        const unsubscribe = navigation.addListener('focus', () => {
            fn();
        });
        return unsubscribe;

    }, [navigation]);

    useEffect(() => {
        if(!isEmpty(data)) {
            storeData('form1answer', data)
        }
    }, [data])


const initialValue = options.find(o => o.label === data.choice)?.value ;
    return (
        <View style={[designs.container]}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Can you make this a SAFE condition?</PageTitle>
                <Subtitle>If possible, please ensure that this condition is not accessible by others and proceed with your report.{"\n"}{"\n"}</Subtitle>
             {dataReady && <RadioForm
                radioStyle={{marginTop: 0, marginBottom: 50}}
                radio_props={options}
                initial={typeof initialValue !== 'undefined' ? initialValue : null} 
                onPress={(value) => {
                setData({choice: options.find(o => o.value === value)?.label})
            }} 
            /> }   
            </InnerContainer>
            <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Location')}>
                    <Text style={designs.loginText}>Next</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Form1;