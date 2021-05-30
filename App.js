import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import Fetch from './src/Fetch';
export default function OficinaAPP () {

  return (
    <View style={styles.container}>
      <View style={styles.viewTitulo}>
        <Text style={styles.titulo}>Orçamentos</Text>
      </View>
      <View>
        <Fetch/>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 7,
    marginBottom: 7,
    color: '#E0E0E0'
  },
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  viewTitulo: {
    alignItems: 'center'
  },
})
