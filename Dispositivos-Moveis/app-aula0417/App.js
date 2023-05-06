import React,{ useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Quadrado from './components/quadrado';

function App(){

  const [valor,setValor] = useState(0);

  return(
    <View style={styles.container}>

      <TextInput style={styles.input}
      value={valor}
      onChangeText={setValor}
      />

      <Quadrado numero={valor}/>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '40%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 5
  }
});

export default App;