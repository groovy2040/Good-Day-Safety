import { StyleSheet, View, Button, Text } from 'react-native';
import React, { useState } from 'react';
import { auth, db } from "../components/firebase";
import { collection, doc, setDoc, getDocs, docSnap, addDoc, connectFirestoreEmulator } from "firebase/firestore"; 
import { getData, storeData } from '../utils/storage';

const CreateID = () => {
    const [number, setNumber] = React.useState(null);

    const getRandomNumber = async() => {
        const randomNumber = Math.floor(Math.floor(100000 + Math.random() * 900000));
        setNumber(randomNumber);
        var user = await getData('email');
        console.log(user);
        addDoc(collection(db, "invitation"), {
            inviteid: randomNumber,
            userid: user
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.numberContainer}>
                    <Text style={styles.text}>{number}</Text>
                </View>
                <Button
                    title='Create Invite ID'
                    onPress={() => {getRandomNumber()}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        padding:80,
        borderRadius:30,
        backgroundColor:'white',
    },
    numberContainer: {
        alignItems:'center',
        marginBottom: 10,
    },
    text: {
        fontSize:25,
        color:'black',
        fontWeight:'700',
    },
});

export default CreateID;