import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

class Calculator extends Component {

  constructor(props){
    super(props)

    this.state = {
      nome : 'Calculadora',
      inputnumero1 : '',
      inputnumero2 : ''
    }

    this.somarNumeros = this.somarNumeros.bind(this);
    this.subNumeros = this.subNumeros.bind(this);
    this.multiNumeros = this.multiNumeros.bind(this);
    this.divNumeros = this.divNumeros.bind(this);
    this.limparNumeros = this.limparNumeros.bind(this);
  }

  somarNumeros(){
    this.setState({
      nome : parseInt(this.state.inputnumero1) + parseInt(this.state.inputnumero2)
    })
  }

  subNumeros(){
    this.setState({
      nome : parseInt(this.state.inputnumero1) - parseInt(this.state.inputnumero2)
    })
  }

  multiNumeros(){
    this.setState({
      nome : parseInt(this.state.inputnumero1) * parseInt(this.state.inputnumero2)
    })
  }

  divNumeros(){
    this.setState({
      nome : parseFloat(this.state.inputnumero1) / parseFloat(this.state.inputnumero2)
    })
  }

  limparNumeros(){
    this.setState({
      nome : 'Calculadora',
      inputnumero1 : '',
      inputnumero2: '',
    })
  }

  render(){

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>{this.state.nome}</Text>
        <TextInput style={styles.input}
          placeholder='Digite um numero'
          placeholderTextColor='#00000058'
          value={this.state.inputnumero1}
          onChangeText={(texto)=> this.setState({inputnumero1 : texto})}
          />
          <TextInput style={styles.input}
          placeholder='Digite outro numero'
          placeholderTextColor='#00000058'
          value={this.state.inputnumero2}
          onChangeText={(texto)=> this.setState({inputnumero2 : texto})}
          />
        <TouchableOpacity style={styles.botao} onPress={this.somarNumeros}>
          <Text style={styles.txtbtn}>Somar numeros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={this.subNumeros}>
          <Text style={styles.txtbtn}>Subtrair numeros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={this.multiNumeros}>
          <Text style={styles.txtbtn}>Multiplicar numeros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={this.divNumeros}>
          <Text style={styles.txtbtn}>Dividir numeros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={this.limparNumeros}>
          <Text style={styles.txtbtn}>Limpar numeros</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'semibold',
    marginBottom: 30
  },
  input: {
    fontSize: 25,
    width:'95%',
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10
  },
  txt: {
    fontSize: 30,
    fontWeight: 'semibold',
    marginBottom: 10,
    marginTop: 20
  },
  botao:{
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    height:50,
    backgroundColor:'#00000059',
    borderRadius:25,
    marginBottom: 15
  },
  txtbtn:{
    color:'#ffffff'
  }
});

export default Calculator;