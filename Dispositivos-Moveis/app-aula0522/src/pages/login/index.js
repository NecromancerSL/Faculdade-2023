import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../services/firebasecon';
import {} from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


export default function Login(){

    const navigation = useNavigation();

    const [email,setEmail] = useState();
    const [senha,setSenha] = useState();


    async function loginUser(){
        await signInWithEmailAndPassword(auth, email, senha).
        then(value =>{
            alert('Logado com sucesso');
            navigation.navigate('home');
            setEmail('');
            setSenha('');
        }).catch(error=>alert(error));
        
    };

    async function cadUser(){
        await createUserWithEmailAndPassword(auth, email, senha).
        then(value =>{alert('Cadastrado com sucesso: ' + value.user.uid)}
        ).catch(error=>alert(error));
    };

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Pagina do Login</Text>
            <TextInput style={styles.input} placeholder='Digite seu email' placeholderTextColor='grey' 
            value={email} onChangeText={(value) => {setEmail(value)}}/>
            <TextInput style={styles.input} placeholder='Digite sua senha'  placeholderTextColor='grey' 
            secureTextEntry={true} value={senha} onChangeText={(value) => {setSenha(value)}}/>
            <TouchableOpacity style={styles.button} onPress={() => loginUser()}>
                <Text style={styles.btntxt}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => cadUser()}>
                <Text style={styles.btntxt}>Cadastrar</Text>
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