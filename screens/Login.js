import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput, TouchableOpacity, SafeAreaView, Image, Alert, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { useEffect } from "react";
import { doc, getCountFromServer, query, collection, where } from "firebase/firestore";
import { db } from "../components/firebase";
import Swipelist from 'react-native-swipeable-list-view';

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

    const data = [
        {
          name: 'Invite 1',
        },
        {
          name: 'Invite 2',
        },
        {
          name: 'Invite 3',
        },
    ];

    /*database()
        .ref('/users/123')
        .once('value')
        .then(snapshot => {
        console.log('User data: ', snapshot.val());
    });*/

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

const styles = StyleSheet.create({
    container: {
      height: 60,
      marginVertical: 10,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      paddingLeft: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  
    rightAction: {
      width: '100%',
      marginVertical: 10,
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      height: 60,
      backgroundColor: '#ffffff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });

export default Login;