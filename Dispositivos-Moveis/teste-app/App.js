import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Login</Text>

      <TextInput style={styles.inputEmail}
        autoComplete= "email"
        placeholder='Digite o e-mail'
        placeholderTextColor='grey'
        keyboardType='email-address'/>

      <TextInput style={styles.inputPassword}
        autoComplete= "password"
        placeholder='Digite a senha'
        placeholderTextColor='grey'
        keyboardType='numeric'
        secureTextEntry={true}/>

        <Button style={styles.button}
        title='Logar'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b0046',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputEmail: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 15,
    marginBottom: 7.5
  },
  inputPassword: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 7.5,
    marginBottom: 15
  },


});
