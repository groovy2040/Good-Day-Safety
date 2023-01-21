import { designs } from './styles';
import { Text, TouchableOpacity } from 'react-native';

export default function Settings({navigation}) {
    return (
        <TouchableOpacity style={designs.headerButton} onPress={() => navigation.navigate('Account Settings')}>
            <Text style={designs.loginText}>Settings</Text>
        </TouchableOpacity>
    )
}