import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const[nome,setNome] = useState('Nome Digitado');
  const[input,setInput] = useState('');

  function mudarNome(){
    setNome(input);
    setInput('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nome}</Text>
      <TextInput 
      style={styles.input}
      value={input}
      onChangeText={(texto) => setInput(texto)}
      />
      <TouchableOpacity style={styles.button} onPress={mudarNome}>
        <Text style={styles.txtbutton}>Mudar Nome</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 10,
    paddingLeft: 5,
    fontSize: 24
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtbutton: {
    fontSize: 22,
    color: '#fff'
  }
});
