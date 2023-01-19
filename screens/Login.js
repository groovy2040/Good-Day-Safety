import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { useEffect } from "react";
import { doc, getCountFromServer, query, collection, where } from "firebase/firestore";
import { db } from "../components/firebase";


import { 
    InnerContainer,
    StyledContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea,
    TextBoxStyle,
    designs
} from '../components/styles';
import { storeData } from '../utils/storage';

/*
    This function is the home page for the app.
    Create Account - Navigates to the account creation page.
    Login - If the login details are correct, it will log into the app and navigate to the modules page.
    Submit Invite ID - After submitting a valid invite ID, the user is navigated to the start of the report.
    PageLogo - Change the source for your specified image.
*/
function Login({ navigation }) {
    const handleInviteID = () => {
		signInWithEmailAndPassword(auth, email, password)
		.then(userCredentials => {
			const user = userCredentials.user;
			console.log('Logged in with:', user.email);
			navigation.navigate('Reports');
		})
		.catch(error => alert(error.message));
	}


    const [inviteid , setInviteid] = useState(); 
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setInviteid("");
        });
        return unsubscribe;
     }, [navigation]);

    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/logo.png')} />
                <PageTitle>Good Day App</PageTitle>
                <TouchableOpacity style={designs.loginBtn} onPress={() =>navigation.navigate('Create Account')}>
                    <Text style={designs.loginText}>Create Account</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={designs.loginBtn} onPress={() =>navigation.navigate('Login page')}>
                    <Text style={designs.loginText}>Login</Text> 
                </TouchableOpacity>
                <View style={designs.inputView}>
                    <TextInput
                    style={designs.TextInput}
                    numeric
                    placeholder="Enter your Invite ID here"
                    keyboardType="numeric"
                    maxLength={6}
                    onChangeText={setInviteid}
                    value={inviteid}
                    /> 
                </View>
                <TouchableOpacity style={designs.loginBtn} onPress={async () =>{

                // validate invite id

                const invitationsRef = collection(db, "invitation");
                const q = query(invitationsRef, where("inviteid", "==", Number(inviteid))); 
                const docs = await getCountFromServer(q);

                console.log(inviteid, typeof inviteid, docs.data())
                if (docs.data().count) {
                    storeData('inviteid', inviteid)
                    navigation.navigate('Form Start')
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }

                }}>
                    <Text style={designs.loginText}>Submit Invite ID</Text> 
                </TouchableOpacity>
            </InnerContainer>
        </View>
        
    
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Login;