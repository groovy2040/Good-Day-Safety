import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { auth, db } from "../components/firebase";
import { collection, doc, setDoc, getDocs, docSnap, query } from "firebase/firestore";
import ProjectCard from '../components/ProjectCard';

import {
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    designs
} from '../components/styles';
import SwipeList from '../components/SwipeList';

let width = Dimensions.get('window').width
/*
    This page will allow the logged in user to manage their modules.
*/
function Reports({ navigation }) {
    let [reports, setReports] = useState([])



    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                navigation.replace("Login page")
            })
            .catch(error => alert(error.message))
    }

    useEffect(() => {
        async function makeCall() {
            const cursor = await getDocs(collection(db, 'report'))
            const results = []
            cursor.forEach(item => results.push(item))
            setReports(results);
        } 
        makeCall()
    }, [])



    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Reports</PageTitle>
                <TouchableOpacity style={designs.Button} onPress={() => navigation.navigate('Account Settings')}>
                    <Text style={designs.loginText}>Settings</Text>
                </TouchableOpacity>
                <View style={styles.container}>
                    {/*<ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
                            {reports.map((report) => <ProjectCard key={report.projectid} report={report} />)}
                    </ScrollView>*/}
                    {reports.length>0?<SwipeList list={reports} />:<Text>Loading...</Text>}
                </View>
                <TouchableOpacity style={designs.Signout} onPress={(handleSignOut)}>
                    <Text style={designs.loginText}>Sign out</Text>
                </TouchableOpacity>
            </InnerContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.8
    }
})

export default Reports;