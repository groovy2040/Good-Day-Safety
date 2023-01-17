import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import { auth, db } from "../components/firebase";
import { collection, doc, setDoc, getDocs, docSnap } from "firebase/firestore"; 

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    designs
} from '../components/styles';

/*
    This page will allow the logged in user to manage their modules.
*/
function Reports({ navigation }) {

    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
        navigation.replace("Login page")
        })
        .catch(error => alert(error.message))
    }

    //const inviteRef = collection(db, "invitation");
    //const docRef = doc(db, "invitation", "Wknfek0en0IghXuyiMRt");
    //const docSnap = getDocs(collection(db, "invitation"));

    /*db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });*/

    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Reports</PageTitle>
                <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Account Settings')}>
                    <Text style={designs.loginText}>Settings</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={designs.Button} onPress={(handleSignOut)}>
                    <Text style={designs.loginText}>Sign out</Text> 
                </TouchableOpacity>
            </InnerContainer>
        </View>

        
    )
     
}

export default Reports;