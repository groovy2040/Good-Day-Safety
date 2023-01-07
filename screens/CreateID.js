import { StyleSheet, View, Button, Text } from 'react-native';
import React from 'react';
 
const CreateID = () => {
    const [number, setNumber] = React.useState(null);

    const getRandomNumber = () => {
        const randomNumber = Math.floor(Math.floor(100000 + Math.random() * 900000));
        setNumber(randomNumber);
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.numberContainer}>
                    <Text style={styles.text}>{number}</Text>
                </View>
                <Button
                    title='Create Invite ID'
                    onPress={() => getRandomNumber()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        padding:80,
        borderRadius:30,
        backgroundColor:'white',
    },
    numberContainer: {
        alignItems:'center',
        marginBottom: 10,
    },
    text: {
        fontSize:25,
        color:'black',
        fontWeight:'700',
    },
});

export default CreateID;