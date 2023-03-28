import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

class AulaState extends Component {

  constructor(props){
    super(props)

    this.state = {
      nome : 'Nome Digitado',
      inputnome : ''
    }

    this.mudarNome = this.mudarNome.bind(this);
    this.limparNome = this.limparNome.bind(this);
  }

  mudarNome(){
    this.setState({
      nome : this.state.inputnome
    })
  }
  limparNome(){
    this.setState({
      nome : 'Nome Digitado',
      inputnome : ''
    })
  }

  render(){

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>{this.state.nome}</Text>
        <TextInput style={styles.input}
          placeholder='Digite um nome'
          placeholderTextColor='#00000058'
          value={this.state.inputnome}
          onChangeText={(texto)=> this.setState({inputnome : texto})}
          />
        <TouchableOpacity style={styles.botao} onPress={this.mudarNome}>
          <Text style={styles.txtbtn}>Mudar nome</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={this.limparNome}>
          <Text style={styles.txtbtn}>Limpar nome</Text>
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
  botao1:{

  },
  txtbtn:{
    color:'#ffffff'
  }
});

export default AulaState;