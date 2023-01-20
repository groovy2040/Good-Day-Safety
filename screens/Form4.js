import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { storeData } from '../utils/storage';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    designs
} from '../components/styles';

/*
    pickImage - creates an async process that allows the user to pick an image from their camera roll
*/
function Form4({ navigation }) {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes : ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
            base64: true
        });
    
        if (!result.canceled) {
            setImage(result.assets[0].uri)
            storeData('image', {image: result.assets[0].base64})
        }
    };

    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Attach a single photo of the unsafe condition</PageTitle>
                <Subtitle>This step is mandatory.</Subtitle>
                {image && <Image source={{ uri : image}} style={{ width:"60%", height: "50%"}}/>}
                <TouchableOpacity style={designs.Button} onPress={pickImage}>
                    <Text style={designs.loginText}>Choose a Photo</Text> 
                </TouchableOpacity>
            </InnerContainer>
            <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Comments')}>
                    <Text style={designs.loginText}>Next</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Form4;