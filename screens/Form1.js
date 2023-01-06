import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

import { 
    InnerContainer,
    StyledContainer,
    PageTitle,
    Subtitle,
    StyledFormArea,
    CheckBox,
    designs
} from '../components/styles';

//Still a work in progress!
function Form1({ navigation }) {
    const [isChecked, setChecked] = useState(false);
    const [chosenOption, setChosenOption] = useState(); //will store our current user options
	const options = [
			{ label: 'Yes, i can make this a safe condition', },
			{ label: 'No, i cannot make this a safe condition',},

	]; //create our options for radio group

    return (
        <View style={designs.container}>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Can you make this a SAFE condition?</PageTitle>
                <Subtitle>If possible, please ensure that this condition is not accessible by others and proceed with your report.{"\n"}{"\n"}</Subtitle>
                <RadioForm
                    radio_props={options}
                    initial={"NULL"} //initial value of this group
                    onPress={(value) => {
                    }} //if the user changes options, set the new value
                />
            </InnerContainer>
            <TouchableOpacity style={designs.Button} onPress={() =>navigation.navigate('Location')}>
                    <Text style={designs.loginText}>Next</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Form1;