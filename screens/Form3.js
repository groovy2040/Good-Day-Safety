import RadioForm from 'react-native-simple-radio-button';
import React, { useState, useEffect, useRef } from "react";
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




const options = [
  { label: 'Vehicle, Machine or Tool', value: 0 },
  { label: 'Electrical', value: 1 },
  { label: 'Flammable or Explosion', value: 2 },
  { label: 'Breathing', value: 3 },
  { label: 'Cutting or Stabbing', value: 4 },
  { label: 'Overhead', value: 5 },
  { label: 'Struck or Hit By', value: 6 },
  { label: 'Unguarded Opening or Edge', value: 7 },
  { label: 'Uneven Surface or Tripping', value: 8 },
  { label: 'Slippery', value: 9 },
  { label: 'Unlit Area', value: 10 },
  { label: 'Other - Describe in Comment Section', value: 11 },

]; //create our options for radio group
export default function Form3({ navigation }) {
  const [chosenOption, setChosenOption] = useState(); //will store our current user options

  const [data, setData] = useState({})
  const [initial, setInitial] = useState(-1)
  const [dataReady, setDataReady] = useState(false);
  const radioBtnRef = useRef(null)

  useEffect(() => {
    const fn = async () => {
      setDataReady(false)

      const data = await getData('form3answer');
      setData(data || {})
      const initialValue = options.find(o => o.label === data.condition)?.value;
      setInitial(typeof(initialValue)==='number'? initialValue:-1)
      setDataReady(true)

    }

    const unsubscribe = navigation.addListener('focus', () => {
      fn();
    });
    return unsubscribe;

  }, [navigation]);

  

  return (
    <View style={designs.container}>
  {dataReady&&
  <>
          <PageTitle>Unsafe Conditions:</PageTitle>
          <RadioForm
            buttonSize={15}
            ref={radioBtnRef}
            radio_props={options}
            initial={initial}
            onPress={(value) => {
              let data = { condition: options.find(o => o.value === value)?.label }
              setData(data)
              if (data.condition) {
                storeData('form3answer', data)
              }
            }} //if the user changes options, set the new value
          />
          <TouchableOpacity style={designs.Button} onPress={() => navigation.navigate('Photo')}>
            <Text style={designs.loginText}>Next</Text>
          </TouchableOpacity>
          </>
}
    </View>
  )
}