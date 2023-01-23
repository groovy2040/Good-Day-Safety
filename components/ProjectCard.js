import React, { useState, useEffect } from 'react';
import { Text, Button, View, TouchableOpacity, ScrollView, Pressable, Image, Dimensions } from 'react-native';

import {
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    designs
} from '../components/styles';

let width = Dimensions.get('window').width

function ProjectCard({ report }) {
    const [show, setShow] = useState(false)

    var base64Image = 'data:image/png;base64,' + report.image;
 
    return (
        <View style={{flex:1}}>
            <Pressable
                onPress={() => setShow(!show)}
                style={{ backgroundColor:'wheat', padding: 15, marginVertical: 10, width: width*0.8}}
            >
                <Text style={{textAlign:'center'}}>{report.project || 'no project name'}</Text>
            </Pressable>
            {show ? 
            <View style={{height: 'auto'}}>
                <Text style={designs.reportText}>1. Can you make this a <Text style={designs.boldText}>safe condition: </Text>{report.choice}</Text>
                <Text style={designs.reportText}>2. <Text style={designs.boldText}>Project Name: </Text>{report.project}</Text>
                <Text style={designs.reportText}>3. <Text style={designs.boldText}>Project Floor: </Text>{report.floor}</Text>
                <Text style={designs.reportText}>4. <Text style={designs.boldText}>Section Area: </Text>{report.section}</Text>
                <Text style={designs.reportText}>5. <Text style={designs.boldText}>Unsafe Conditions: </Text>{report.condition}</Text>
                <Text style={designs.reportText}>6. <Text style={designs.boldText}>Comments: </Text>{report.comment}</Text>
                <Image style={{ height: 150, borderWidth: 1}} source={{uri: base64Image}}/>
            </View>
            : null}
        </View>
    )

}

export default ProjectCard;