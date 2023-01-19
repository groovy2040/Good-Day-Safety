import RadioForm from 'react-native-simple-radio-button';
import React, { useState, useEffect } from "react";
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




export default function Form3({navigation}) {
  const [chosenOption, setChosenOption] = useState(); //will store our current user options
  const options = [
    { label: 'Vehicle, Machine or Tool', value: 0 },
    { label: 'Electrical', value: 1},
    { label: 'Flammable or Explosion', value: 2},
    { label: 'Breathing', value: 3},
    { label: 'Cutting or Stabbing', value: 4},
    { label: 'Overhead', value: 5},
    { label: 'Struck or Hit By', value: 6},
    { label: 'Unguarded Opening or Edge', value: 7},
    { label: 'Uneven Surface or Tripping', value: 8},
    { label: 'Slippery', value: 9},
    { label: 'Unlit Area', value: 10},
    { label: 'Other - Describe in Comment Section', value: 11},

  ]; //create our options for radio group
  
  const [data, setData] = useState({})

  const  [dataReady, setDataReady] = useState(false);

  useEffect(() => {
    const fn = async () => {
          setDataReady(false)
        
        const data = await getData('form3answer');
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
            storeData('form3answer', data)
        }
    }, [data])

    const initialValue = options.find(o => o.label === data.condition)?.value;
    
  return (
      <View style={designs.container}>
        <PageTitle>Unsafe Conditions:</PageTitle>
         {dataReady && <RadioForm
          buttonSize={15}
          radio_props={options}
          initial={typeof initialValue !== 'undefined' ? initialValue : null}
          onPress={(value) => {
            setData({condition: options.find(o => o.value === value)?.label})
          }} //if the user changes options, set the new value
         /> }   
        <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Photo')}>
                      <Text style={designs.loginText}>Next</Text> 
              </TouchableOpacity>       
      </View> 
    )
  }