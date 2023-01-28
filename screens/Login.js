import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { useEffect } from "react";
import { doc, getCountFromServer, query, collection, where } from "firebase/firestore";
import { db } from "../components/firebase";
import { storeData } from '../utils/storage';
import AppID from '../utils/AppID';

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


function Login({ navigation }) {
    let appID = AppID()
    const banListRef = collection(db, "ban_list");
    const kickListRef = collection(db, "kick_list");
    const [inviteid, setInviteid] = useState();

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            setInviteid("");
        });
        return unsubscribe;
    }, [navigation]);

    

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={designs.container}>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/logo.png')} />
                    <PageTitle>Good Day App</PageTitle>
                    <TouchableOpacity style={designs.loginBtn} onPress={() => navigation.navigate('Create Account')}>
                        <Text style={designs.loginText}>Create Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={designs.loginBtn} onPress={() => navigation.navigate('Login page')}>
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
                    <TouchableOpacity style={{ ...designs.submit }} onPress={async () => {
                        //Ban
                        const qban = query(banListRef, where("appID", "==", appID));
                        const ban = await getCountFromServer(qban);
                        if (ban.data().count) {
                            Alert.alert("Banned device", "Please contact administrator!");
                        } else {
                            //Kick                            
                            const qkick = query(kickListRef, where("appID", "==", appID), where("inviteid", "==", Number(inviteid)));
                            const kick = await getCountFromServer(qkick);
                            if (kick.data().count) {
                                Alert.alert("Kicked ID", "Please Enter a Valid Invitation Code to Proceed!");
                            } else {
                                const invitationsRef = collection(db, "invitation");
                                const q = query(invitationsRef, where("inviteid", "==", Number(inviteid)));
                                const docs = await getCountFromServer(q);
                                console.log(inviteid, typeof inviteid, docs.data())

                                if (docs.data().count) {
                                    storeData('inviteid', inviteid)
                                    navigation.navigate('Form Start')
                                } else {
                                    Alert.alert("Invalid ID", "Please Enter a Valid Invitation Code to Proceed!");
                                }
                            }
                        }

                    }}>
                        <Text style={{ ...designs.loginText }}>Submit Invite ID</Text>
                    </TouchableOpacity>
                </InnerContainer>
            </View>
        </ScrollView>


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