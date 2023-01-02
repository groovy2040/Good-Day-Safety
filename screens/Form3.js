import { View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import React, { useState } from "react";
import { Text } from 'react-native';


export default function Form3() {
  const [chosenOption, setChosenOption] = useState(); //will store our current user options
  const options = [
    { label: 'Vehicle, Machine or Tool', },
    { label: 'Electrical',},
    { label: 'Flammable or Explosion',},
    { label: 'Breathing',},
    { label: 'Cutting or Stabbing',},
    { label: 'Overhead',},
    { label: 'Struck or Hit By',},
    { label: 'Unguarded Opening or Edge',},
    { label: 'Uneven Surface or Tripping',},
    { label: 'Slippery',},
    { label: 'Unlit Area',},
    { label: 'Other - Describe in Comment Section',},

  ]; //create our options for radio group
  return (
    <View>
      <Text> {chosenOption}</Text>
      <RadioForm
        radio_props={options}
        initial={0} //initial value of this group
        onPress={(value) => {
        }} //if the user changes options, set the new value
      />
    </View>
  );
}