import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    designs
} from '../components/styles';

/*
    This page will allow the user to create an account to use the app.
*/
function CreateAccount({ navigation }) {
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    
    const handleSignUp = () => {
		auth
		.createUserWithEmailAndPassword(email, password)
		.then(userCredentials => {
			const user = userCredentials.user;
			console.log(user.email);
		})
		.catch(error => alert(error.message))
	}
	const auth = getAuth();

    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Create an Account</PageTitle>
            </InnerContainer>
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
            <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Home')}>
                    <Text style={designs.loginText}>Create Account</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default CreateAccount;