import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login(){

    const navigation = useNavigation();

    function login(){
        navigation.navigate('home');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Pagina do Login</Text>
            <TouchableOpacity style={styles.button} onPress={() => login()}>
                <Text style={styles.btntxt}>Acessar lista de produtos</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        paddingBottom: 15,
    },
    input: {
        width: '70%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        padding: 10,
        marginTop: 20
    },
    button: {
        width: '60%',
        height: 50,
        backgroundColor: 'blue',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btntxt: {
        fontSize: 20,
        color: 'fff'
    }
});