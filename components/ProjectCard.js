import React, { useState, useEffect } from 'react';
import { Text, Button, View, TouchableOpacity, ScrollView, Pressable } from 'react-native';

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
function ProjectCard({ report }) {
    const [show, setShow] = useState(false)
    return (
        <View style={{flex:1}}>
            <Pressable
                onPress={() => setShow(!show)}
                style={{ backgroundColor:'wheat', padding:20}}
            >
                <Text>{report.project || 'no project name'}</Text>
            </Pressable>
            {show ? 
            <View>
                <Text>Choice: {report.choice}</Text>
                <Text>Project Name: {report.project}</Text>
                <Text>Floor: {report.floor}</Text>
                <Text>Section: {report.section}</Text>
                <Text>Condition: {report.condition}</Text>
                <Text>answer: {report.answer}</Text>
            </View> 
            : null}
        </View>
    )

}

export default ProjectCard;