import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {api} from './src/services/api';
import React, {useState} from 'react';

export default function App() {

  const {cep, setCep} = useState('');
  const {end, setEnd} = useState('');
  const {bairro, setBairro} = useState('');
  const {local, setLocal} = useState('');
  const {uf, setUf} = useState('');


  async function buscarCep(){
    const response = await api.get(`/${cep}/json/`);
    alert(response.data.logradouro);
    setCep(response.data.cep);
    setEnd(response.data.logradouro);
    setBairro(response.data.bairro);
    setLocal(response.data.localidade);
    setUf(response.data.uf);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite um CEP para pesquisa</Text>
      <TextInput style={styles.input} value={cep} onChangeText={(texto) => setCep(texto)}/>
      <Button title="Buscar" onPress={buscarCep}/>
      <Text>{cep}</Text>
      <Text>{end}</Text>
      <Text>{bairro}</Text>
      <Text>{local}</Text>
      <Text>{uf}</Text>
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
    fontSize: 24,
    marginBottom: 15
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 18,
    paddingLeft: 10,
    borderRadius: 10,
    marginBottom: 15
  }
});
