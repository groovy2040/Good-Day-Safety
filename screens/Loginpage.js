import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
} from "react-native";

import { designs } from "../components/styles";

export default function LoginPage({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSignUp = () => {
		createUserWithEmailAndPassword(auth, email, password)
		.then(userCredentials => {
			const user = userCredentials.user;
			console.log(user.email);
		})
		.catch(error => alert(error.message));
	}
	const handleLogin = () => {
		signInWithEmailAndPassword(auth, email, password)
		.then(userCredentials => {
			const user = userCredentials.user;
			console.log('Logged in with:', user.email);
		})
		.catch(error => alert(error.message));
	}
	/*createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});*/

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
		<TouchableOpacity>
			<Text style={designs.forgot_button}>Forgot Password?</Text> 
		</TouchableOpacity> 
		<TouchableOpacity style={designs.loginBtn} onPress={() => navigation.navigate('Reports')}>
			<Text style={designs.loginText}>LOGIN</Text> 
		</TouchableOpacity> 
		</View> 
	);
}