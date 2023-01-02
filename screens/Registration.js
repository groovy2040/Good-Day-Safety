import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
} from 'react-native';

import { designs } from "../components/styles";

export default function Registration({ navigation }) {

	return (
		<View style={designs.container}>
			<StatusBar style="dark" />
		<View style={designs.inputView}>
			<TextInput
			style={designs.TextInput}
			placeholder="Enter your Email"
			placeholderTextColor="#003f5c"
			/> 
		</View> 
		<View style={designs.inputView}>
			<TextInput
			style={designs.TextInput}
			placeholder="Enter your Password"
			placeholderTextColor="#003f5c"
			/> 
		</View> 
		<View style={designs.inputView}>
			<TextInput
			style={designs.TextInput}
			placeholder="Confirm your Password"
			placeholderTextColor="#003f5c"
			/> 
		</View> 
		<TouchableOpacity style={designs.loginBtn} onPress={() =>navigation.navigate('Reports')}>
			<Text style={designs.loginText}>Create Account</Text> 
		</TouchableOpacity> 
		</View> 
	);
}