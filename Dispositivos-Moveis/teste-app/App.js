import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class AulaState extends Component {

  constructor(props){
    super(props)

    this.state= {
      nome : 'Fulanim de tal',
      inputnome : '',
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
      nome : '',
      inputnome : ''
    })
  }

  render(){
    return (
      <View style={styles.container}> 
        <Text style={styles.title}>{this.state.nome}</Text>

        <TextInput style={styles.inputEmail}
          autoComplete= "email"
          placeholder='Digite o nome'
          placeholderTextColor='grey'
          value={this.state.inputnome}
          onChangeText={(texto) => this.setState({inputnome : texto})}/> 

        <TouchableOpacity style={styles.button} onPress={this.mudarNome}>
          <Text style={styles.textbutton}>Mudar Nome</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.limparNome}>
          <Text style={styles.textbutton}>Limpar Nome</Text>
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
  button: {
    width: '65%',
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  textbutton: {
    fontSize: 22,
    color: '#fff',
  }


});

export default AulaState;
