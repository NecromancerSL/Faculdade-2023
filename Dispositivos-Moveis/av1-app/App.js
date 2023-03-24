import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo IRPF</Text>
      <TextInput style={styles.inputsalario}
        autoComplete="text"
        placeholder='Digite o salário bruto'
        placeholderTextColor='grey'
        keyboardType="numeric" />
      <TextInput style={styles.inputirpf}
        autoComplete="text"
        placeholder='Digite a alíquota do IRPF'
        placeholderTextColor='grey'
        keyboardType="numeric" />
        <Button title='Calcular' />
      <Text style={styles.title}>R$ 0.00</Text>
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
  title:{
    fontSize: 30,
  },
  inputsalario: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 15,
    marginBottom: 7.5
  },
  inputirpf: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 7.5,
    marginBottom: 15
  }
});
