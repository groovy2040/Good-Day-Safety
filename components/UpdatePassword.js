import { getAuth, updatePassword } from "firebase/auth";
import { designs } from "../components/styles";
import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
    Alert
} from "react-native";


export default function UpdatePassword() {
    let [newPassword, setNewPassword] = useState('')
    
    function handleUpdate(){
        const auth = getAuth();
        const user = auth.currentUser;

        updatePassword(user, newPassword).then(() => {
            Alert.alert('Password Change', 'Your password has been successfully changed!')

        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <>
        <View style={designs.inputView}>
            <TextInput
                style={designs.TextInput}
                placeholder="Enter your new password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={setNewPassword}
            />
           
        </View>
         <TouchableOpacity style={designs.loginBtn} onPress={(handleUpdate)}>
         <Text style={designs.loginText}>Change Password</Text>
     </TouchableOpacity>
     </>
    )


}