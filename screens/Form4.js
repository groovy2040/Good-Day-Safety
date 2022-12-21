import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea
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
        });
    
        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    };

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Attach a single photo of the unsafe condition *</PageTitle>
                <Subtitle>* This step is mandatory.</Subtitle>
                <Text>{"\n"}</Text>
                {image && <Image source={{ uri : image}} style={{ width:400, height: 600}}/>}
                <Text>{"\n"}</Text>
                <Button title="Choose a photo from your library" onPress={pickImage}/>
            </InnerContainer>
            <Button title="Next" onPress={() => navigation.navigate('Comments')}/>
        </StyledContainer>
    )
}

export default Form4;