import { StyleSheet, View, Button, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { auth, db } from "../components/firebase";
import { collection, doc, deleteDoc, setDoc, getDocs, query, where } from "firebase/firestore";
import { getData, storeData } from '../utils/storage';
import { InnerContainer, PageTitle } from '../components/styles';

const BanCard = ({ ban, fetch, setFetch }) => {
    const showAlert = () =>
        Alert.alert('Confirm Unban', 'Are you sure you want to unban?', [
            {
                text: 'Cancel',
                onPress: () => { },
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () => {
                    ban.deleteItself()
                    setFetch(!fetch)
                }
            },
        ]);
    return (
        <View>
            <TouchableOpacity
                style={{
                    width: '60%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    backgroundColor: '#ccc',
                    alignSelf: 'center',
                    padding: 10,
                    marginBottom: 5,
                    marginTop: 5
                }}
                onPress={showAlert}>
                <Text>{ban.appID}</Text>
                <Text style={styles.invitetext}>{"x"}</Text>
            </TouchableOpacity>
        </View>
    )
}
function BanList({ navigation }) {
    const [fetch, setFetch] = useState();
    let [banList, setBanList] = useState([]);

    useEffect(() => {
        const fn = async () => {
            const q = query(collection(db, "ban_list"));
            const cursor = await getDocs(q)
            const results = []
            cursor.forEach(item => {
                let record = item.data();
                record.deleteItself = function () {
                    deleteDoc(item.ref)
                }
                results.push(record)
            })
            setBanList(results);
        }
        fn()
    }, [fetch])

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <PageTitle>Ban List</PageTitle>
            <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
                {banList.map((banItem) =>
                    <BanCard
                        key={banItem.appID}
                        ban={banItem}
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
    invitetext: {
        fontSize: 15,
        color: 'red',
        fontWeight: '700',
    },
});

export default BanList;