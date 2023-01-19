import React, { useState, useEffect } from 'react';
import { Text, Button, View, TouchableOpacity, ScrollView, Pressable, Image } from 'react-native';

import {
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    designs
} from '../components/styles';



function ProjectCard({ report }) {
    const [show, setShow] = useState(false)

    var base64Image = 'data:image/png;base64,' + report.image;

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
                <Image style={{width: '50%', height: '50%', borderWidth: 1}} source={{uri: base64Image}}/>
            </View> 
            : null}
        </View>
    )

}

export default ProjectCard;