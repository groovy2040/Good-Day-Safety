import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import { designs } from "../components/styles";

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
} from 'react-native';
import { Alert } from "react-native";


export default function Registration({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const handleSignUp = () => {
		createUserWithEmailAndPassword(auth, email, password)
		.then(userCredentials => {
			const user = userCredentials.user;
			console.log(user.email);
			Alert.alert("Account Created", "Your account has been successfully created")
		})
		.catch(error => alert(error.message));
	}

	return (
		<View style={designs.container}>
			<StatusBar style="dark" />
		<View style={designs.inputView}>
			<TextInput
			style={designs.TextInput}
			placeholder="Email"
			placeholderTextColor="#003f5c"
			onChangeText={(email) => setEmail(email)}
			/> 
		</View> 
		<View style={designs.inputView}>
			<TextInput
			style={designs.TextInput}
			placeholder="Password"
			placeholderTextColor="#003f5c"
			secureTextEntry={true}
			onChangeText={(password) => setPassword(password)}
			/> 
		</View>
		<TouchableOpacity style={designs.loginBtn} onPress={handleSignUp}>
			<Text style={designs.loginText}>Create Account</Text> 
		</TouchableOpacity> 
		</View> 
	);
}

//() => navigation.navigate('Reports')