import React, { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    CheckBox,
    designs
} from '../components/styles';

import { storeData } from '../utils/storage';

//Still a work in progress!
function Form1({ navigation }) {
    const [chosenOption, setChosenOption] = useState(); //will store our current user options
  const options = [
    { label: 'Yes', value: 0 },
    { label: 'No', value: 1},

  ];

    const [data, setData] = useState({})

    storeData('form1answer', data)

    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Can you make this a SAFE condition?</PageTitle>
                <Subtitle>If possible, please ensure that this condition is not accessible by others and proceed with your report.{"\n"}{"\n"}</Subtitle>
                <RadioForm
                radio_props={options}
                initial={null} //initial value of this group
                onPress={(value) => {
                setData({choice: options.find(o => o.value === value)?.label})
            }} //if the user changes options, set the new value
            />
            </InnerContainer>
            <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Location')}>
                    <Text style={designs.loginText}>Next</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Form1;