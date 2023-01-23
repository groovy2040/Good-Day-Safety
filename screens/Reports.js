import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { auth, db } from "../components/firebase";
import { collection, doc, setDoc, getDocs, docSnap, query, where } from "firebase/firestore";
import SwipeList from '../components/SwipeList';
import { getData,storeData } from '../utils/storage';

import {
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    designs
} from '../components/styles';


let width = Dimensions.get('window').width
/*
    This page will allow the logged in user to manage their modules.
*/
function Reports({ navigation }) {
    let [reports, setReports] = useState(null)

    const handleSignOut = () => {
        auth.signOut()
            .then(async () => {
                setReports(null)
                await storeData('email','')
                navigation.replace("Login page")
            })
            .catch(error => alert(error.message))
    }

    useEffect(() => {
        async function makeCall() {
            let userid = await getData('email')
            const q = query(collection(db, "report"), where('userid', '==', userid));
            const cursor = await getDocs(q)
            const results = []

            cursor.forEach(item => results.push(item))
            setReports(results);
        }
        makeCall()
    }, [navigation])



    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
                <PageTitle>Reports</PageTitle>

                <View style={styles.container}>
                    {/*<ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
                            {reports.map((report) => <ProjectCard key={report.projectid} report={report} />)}
                    </ScrollView>*/}
                    {reports ? (reports.length > 0 ? <SwipeList list={reports} /> : <Text>No reports</Text>) : <Text>Loading...</Text>}
                </View>
                <TouchableOpacity style={designs.Signout} onPress={(handleSignOut)}>
                    <Text style={designs.loginText}>Sign out</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 1
    }
})

export default Reports;