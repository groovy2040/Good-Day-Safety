import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TouchableOpacity, ScrollView } from 'react-native';
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

    useEffect(async () => {
        const cursor = await getDocs(collection(db, 'report'))
        const results = []
        cursor.forEach(item => results.push(item.data()))
        setReports(results);
    }, [])



    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Reports</PageTitle>
                <TouchableOpacity style={designs.Button} onPress={() => navigation.navigate('Account Settings')}>
                    <Text style={designs.loginText}>Settings</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ paddingVertical: 80 }}>
                    <View>
                        {reports.map((report) => <ProjectCard key={report.projectid} report={report} />)}
                    </View>
                </ScrollView>
                <TouchableOpacity style={designs.Signout} onPress={(handleSignOut)}>
                    <Text style={designs.loginText}>Sign out</Text>
                </TouchableOpacity>
            </InnerContainer>
        </View>


    )

}

export default Reports;