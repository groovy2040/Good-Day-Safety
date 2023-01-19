import { StyleSheet, View, Button, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { auth, db } from "../components/firebase";
import { collection, doc, deleteDoc, setDoc, getDocs, docSnap, addDoc, connectFirestoreEmulator, query, orderBy } from "firebase/firestore"; 
import { getData, storeData } from '../utils/storage';

const InvitationCard = ({ invite, inviteid, fetch, setFetch}) => {
    const showAlert = () =>
    Alert.alert('Confirm deletion', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => { deleteDoc(invite.ref)
    
        setFetch(!fetch)

    }},
    ]);
    return (
        <View>
            <TouchableOpacity
            style={{
                width: '50%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor: '#ccc',
                alignSelf: 'center',
                padding: 10,
                marginBottom: 10
            }}
            onPress={showAlert}>
        <Text>{inviteid}</Text>
        <Text>{"x"}</Text>
            </TouchableOpacity>
        </View>
    )
}
const CreateID = () => {
    const [number, setNumber] = React.useState(null);
    const [fetch, setFetch] = useState();

    const getRandomNumber = async () => {
        const randomNumber = Math.floor(Math.floor(100000 + Math.random() * 900000));
        setNumber(randomNumber);
        
        var user = await getData('email');
        console.log(user);
        addDoc(collection(db, "invitation"), {
            inviteid: randomNumber,
            userid: user,
            createdat: Date.now()
        });      

        setFetch(!fetch)
    }

    let [invitationids, setInvitationids] = useState([]);

    useEffect(() => {
        const fn = async () => {
            const q = query(collection(db, "invitation"), orderBy("createdat", "desc"));
            const cursor = await getDocs(q)
            const results = []
            cursor.forEach(item => results.push(item))
            setInvitationids(results);
        }
        fn()
    }, [fetch])

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
            <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
                    {invitationids.map((invite) => {
                        const inviteid = invite.data().inviteid
                        return  <InvitationCard key={inviteid} invite={invite} inviteid={inviteid} 
                        fetch={fetch}
                        setFetch={setFetch}
                        />
                    })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexShrink: 1, 
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        marginTop: 20,
        marginBottom: 40,
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