import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import { getData } from '../utils/storage';
import { collection, doc, setDoc, getDocs, docSnap, addDoc, connectFirestoreEmulator } from "firebase/firestore"; 
import { auth, db } from "../components/firebase";

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    designs
} from '../components/styles';


function Form6({ navigation }) {

    const [data, setData] = useState({})

    useEffect(() => {

        const fn = async () => {
            const data1 = await getData('form1answer');
            const data2 = await getData('form2answer');
            const data3 = await getData('form3answer');
            const data5 = await getData('form5answer');            
            const data = {...data1, ...data2, ...data3,  ...data5} 
            setData(data)
        
        }
        fn()
    }, [])
 
    /*const addReport = () => addDoc(collection(db, "report"), {
        inviteid: setNumber(randomNumber),
        userid: getData('email')
    });*/

    return (
        <View style={{...designs.container}}>
            <StatusBar style="dark" />
            <InnerContainer style={designs.responseContainer}>
                <PageTitle>Confirm your responses:</PageTitle>
                <Text style={designs.responseText}>1. Can you make this a <Text style={designs.boldText}>safe condition: </Text>{data.choice}</Text>
                <Text style={designs.responseText}>2. <Text style={designs.boldText}>Project Name: </Text>{data.project}</Text>
                <Text style={designs.responseText}>3. <Text style={designs.boldText}>Project Floor: </Text>{data.floor}</Text>
                <Text style={designs.responseText}>4. <Text style={designs.boldText}>Section Area: </Text>{data.section}</Text>
                <Text style={designs.responseText}>5. <Text style={designs.boldText}>Unsafe Conditions: </Text>{data.condition}</Text>
                <Text style={designs.responseText}>6. <Text style={designs.boldText}>Comments: </Text>{data.answer}</Text>
            </InnerContainer>
            <TouchableOpacity style={designs.Button} onPress={async () => {
                const randomNumber = Math.floor(Math.floor(100000 + Math.random() * 900000));
                const inviteid  = await getData('inviteid')
                console.log(inviteid)  

            addDoc(collection(db, "report"), { inviteid: Number(inviteid), reportid: randomNumber, ...data});
            navigation.navigate('Success')
            }}>
                    <Text style={designs.loginText}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Form6;