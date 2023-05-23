import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home(){

    const navigation = useNavigation();

    function Logout(){
        navigation.navigate('login');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Pagina Home</Text>
            <Button title='Logout' onPress={() => Logout()} />
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
    }
});