import RadioForm from 'react-native-simple-radio-button';
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, Three, View, TextInput, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    TextBoxStyle,
    designs
} from '../components/styles';

import { storeData } from '../utils/storage';


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

  storeData('form3answer', data)
    
  return (
      <View style={designs.container}>
        <PageTitle>Unsafe Conditions:</PageTitle>
        <RadioForm
          radio_props={options}
          initial={null} //initial value of this group
          onPress={(value) => {
            setData({condition: options.find(o => o.value === value)?.label})
          }} //if the user changes options, set the new value
        />
        <TouchableOpacity style={designs.Three} onPress={() =>navigation.navigate('Photo')}>
                      <Text style={designs.loginText}>Next</Text> 
              </TouchableOpacity>       
      </View> 
    )
  }