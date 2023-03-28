import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class BiscoitoSorte extends Component{
  constructor(props){
    super(props)
    this.state = {
      img : require('./assets/biscoito.png')
    }
  }
  

  render(){
  return (
    <View style={styles.container}>
      <Text>Frase da sorte</Text>

      <Image
      source={this.state.img}
      style={styles.img}/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.txtbutton}>Quebrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.txtbutton}>Novo Biscoito</Text>
      </TouchableOpacity>

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
