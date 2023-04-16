import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState} from 'react';

export default function App() {

  const[frase,setFrase] = useState('Frase da Sorte')
  let imagens = {
    img1: 'https://static6.depositphotos.com/1014511/620/i/600/depositphotos_6203735-stock-photo-fortune-cookie.jpg',
    img2: 'https://media.istockphoto.com/id/174622880/pt/foto/bolinho-da-sorte.jpg?s=612x612&w=0&k=20&c=Gx9Vlrxg0nbkwvTCmjlX1G3XkzUhir7x4bJ05igukO8=',
  }
  let frases = [
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
  const[img,setImagem] = useState(imagens.img1)
  const[quebrou,setQuebrou] = useState(false)
  
  function quebrarBiscoito(){
    let aleatorio = Math.floor(Math.random()*frases.length)
    setFrase(frases[aleatorio])
    setImagem(imagens.img2)
    setQuebrou(true)
  }

  function novoBiscoito(){
    setFrase('Frase da Sorte')
    setImagem(imagens.img1)
    setQuebrou(false)
  }

 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{frase}</Text>

      <Image 
      source={img}
      style={styles.img}/>

      {!quebrou ? (
      <TouchableOpacity style={styles.button} onPress={quebrarBiscoito}> 
        <Text style={styles.txtbutton}>Quebrar</Text>
      </TouchableOpacity>) : (null)}

      
      {quebrou ? (
      <TouchableOpacity style={styles.button} onPress={novoBiscoito}>
        <Text style={styles.txtbutton}>Novo Biscoito</Text>
      </TouchableOpacity>) : (null)}
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
