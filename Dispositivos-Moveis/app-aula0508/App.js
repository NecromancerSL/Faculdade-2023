import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DATA from './src/data';
import { FlashList } from '@shopify/flash-list';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exemplo FlashList</Text>
      <FlashList 
        //traz a lista Data
        data={DATA}
        //renderiza os itens
        renderItem={({item}) =>(
          <TouchableOpacity style={styles.button}>
            <View>
              <Text style={styles.item}><img src = {item.img}></img></Text>
              <Text style={styles.itemtitulo}>{item.title}</Text>
              <Text style={styles.item}>{item.year}</Text>
              <Text style={styles.item}>{item.price}</Text>
              <Text style={styles.item}>{item.plataforma}</Text>
            </View>
          </TouchableOpacity>
        )}
      
      
      
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  item: {
    fontSize: 30,
    paddingLeft: 5
  },
  itemtitulo: {
    fontSize: 30,
    paddingLeft: 5,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 20,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'black'
  }
});
