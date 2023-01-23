import { StyleSheet, View, Button, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { auth, db } from "../components/firebase";
import { collection, doc, deleteDoc, setDoc, getDocs, docSnap, addDoc, connectFirestoreEmulator, query, orderBy, where } from "firebase/firestore";
import { getData, storeData } from '../utils/storage';
import { designs } from '../components/styles';

const InvitationCard = ({ invite, fetch, setFetch }) => {
    const showAlert = () =>
        Alert.alert('Confirm deletion', 'Are you sure you want to delete?', [
            {
                text: 'Cancel',
                onPress: () => { },
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () => {
                    invite.deleteItself()
                    setFetch(!fetch)
                }
            },
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
                    marginBottom: 5,
                    marginTop: 5
                }}
                onPress={showAlert}>
                <Text>{invite.inviteid}</Text>
                <Text style={styles.invitetext}>{"x"}</Text>
            </TouchableOpacity>
        </View>
    )
}
const CreateID = () => {
    const [number, setNumber] = React.useState(null);
    const [fetch, setFetch] = useState();

    const getRandomNumber = async() => {
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
            let userid = await getData('email')
            const q = query(collection(db, "invitation"), where('userid', '==', userid));
            const cursor = await getDocs(q)
            const results = []
            cursor.forEach(item => {
                let record = item.data();
                record.deleteItself = function () {
                    deleteDoc(item.ref)
                }
                results.push(record)
            })
            results.sort((a, b) => b.createdat - a.createdat)
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
                    onPress={() => { getRandomNumber() }}
                />
            </View>
            <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
                {invitationids.map((invite) => 
                    <InvitationCard 
                        key={invite.inviteid} 
                        invite={invite}
                        fetch={fetch}
                        setFetch={setFetch}
                    />
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        marginTop: 20,
        marginBottom: 20,
        padding: 40,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    numberContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 25,
        color: 'black',
        fontWeight: '700',
    },
    invitetext: {
        fontSize: 15,
        color: 'red',
        fontWeight: '700',
    },
});

export default CreateID;