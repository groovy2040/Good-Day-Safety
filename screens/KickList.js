import { StyleSheet, View, Button, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { auth, db } from "../components/firebase";
import { collection, doc, deleteDoc, setDoc, getDocs, query, where } from "firebase/firestore";
import { getData, storeData } from '../utils/storage';
import { InnerContainer, PageTitle } from '../components/styles';

const KickCard = ({ kick, fetch, setFetch }) => {
    const showAlert = () =>
        Alert.alert('Confirm Unkick', 'Are you sure you want to unkick?', [
            {
                text: 'Cancel',
                onPress: () => { },
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () => {
                    kick.deleteItself()
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
                <Text>{kick.appID}</Text>
                <Text style={styles.invitetext}>{"x"}</Text>
            </TouchableOpacity>
        </View>
    )
}
function KickList({ navigation }) {
    const [fetch, setFetch] = useState();
    let [kickList, setKickList] = useState([]);

    useEffect(() => {
        const fn = async () => {
            const q = query(collection(db, "kick_list"));
            const cursor = await getDocs(q)
            const results = []
            cursor.forEach(item => {
                let record = item.data();
                record.deleteItself = function () {
                    deleteDoc(item.ref)
                }
                results.push(record)
            })
            setKickList(results);
        }
        fn()
    }, [fetch])

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <PageTitle>Kick List</PageTitle>
            <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
                {kickList.map((kickItem) =>
                    <KickCard
                        key={kickItem.appID}
                        kick={kickItem}
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

export default KickList;