import RadioForm from 'react-native-simple-radio-button';
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
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


export default function Form3({navigation}) {
	const [chosenOption, setChosenOption] = useState(); //will store our current user options
	const options = [
			{ label: 'Vehicle, Machine or Tool', },
			{ label: 'Electrical',},
			{ label: 'Flammable or Explosion',},
			{ label: 'Breathing',},
			{ label: 'Cutting or Stabbing',},
			{ label: 'Overhead',},
			{ label: 'Struck or Hit By',},
			{ label: 'Unguarded Opening or Edge',},
			{ label: 'Uneven Surface or Tripping',},
			{ label: 'Slippery',},
			{ label: 'Unlit Area',},
			{ label: 'Other - Describe in Comment Section',},

	]; //create our options for radio group
	return (
    
    <View style={designs.container}>
		<InnerContainer>
			<PageTitle>Please specify the type of the unsafe condition</PageTitle>
			<RadioForm
				radio_props={options}
				initial={"NULL"} //initial value of this group
				onPress={(value) => {
				}} //if the user changes options, set the new value
			/>
			
		</InnerContainer>
		<TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Photo')}>
			<Text style={designs.loginText}>Next</Text> 
		</TouchableOpacity>
	</View>
  )
}