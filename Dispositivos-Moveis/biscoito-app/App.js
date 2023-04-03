import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class BiscoitoSorte extends Component{
  constructor(props){
    super(props)
    this.state = {
      frasetxt: 'Frase da sorte',
      img : require('./assets/biscoito.png'),
      quebrou: false
    }

    this.frases = [
      'A vida trará coisas boas se tiver paciência',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
    ]

    this.quebrarBiscoito=this.quebrarBiscoito.bind(this);
    this.novoBiscoito=this.novoBiscoito.bind(this);
  }
  
  quebrarBiscoito(){ 
    let aleatorio = Math.floor(Math.random()*this.frases.length)
    this.setState({
      frasetxt : this.frases[aleatorio],
      img : require('./assets/biscoitoAberto.png'),
      quebrou: true
    })
  }
  
  novoBiscoito(){
    this.setState({
      frasetxt: 'Frase da sorte',
      img : require('./assets/biscoito.png'),
      quebrou: false
    })
  }

  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{this.state.frasetxt}</Text>

      <Image
      source={this.state.img}
      style={styles.img}/>

      {!this.state.quebrou ? (
      <TouchableOpacity style={styles.button} onPress={this.quebrarBiscoito}> 
        <Text style={styles.txtbutton}>Quebrar</Text>
      </TouchableOpacity>) : (null)}

      {this.state.quebrou ? (
      <TouchableOpacity style={styles.button} onPress={this.novoBiscoito}>
        <Text style={styles.txtbutton}>Novo Biscoito</Text>
      </TouchableOpacity>) : (null)}

    </View>
  );
}};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22
  },
  img : {
    width: 250,
    height: 250
  },
  button : {
    width: '65%',
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 15
  },
  txtbutton : {
    fontSize: 22,
    color: '#fff'
  }
});

export default BiscoitoSorte;


