import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Modal } from 'react-native';

export default class Fetch extends Component {
  // constructor precisa do super antes de qualquer outra declaração > chama o construtor da classe pai > Component
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      selectedItem: {}, // pega o cliente, vendedor e valor do touchable selecionado
      isModalVisible: false
    },
     

    fetch('https://my-json-server.typicode.com/codificar/oficina/proposals')
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }))
      .catch((error) => console.error(error))
      .finally(() => this.setState({ isLoading: false }));

  }
  // renderizando o jsx
  render() {
    return (
    <>
      {this.state.isLoading ? <ActivityIndicator/> : (
        <View >
          <Modal animationType="fade" transparent={true} visible={this.state.isModalVisible} onRequestClose={() => { this.setModalVisible(!modalVisible); }}>
            <View style={styles.containerModal}>
            <Text style ={styles.textModal}>{this.state.selectedItem?.description}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => this.setModalVisible(false) }> 
            <Text style ={styles.textDados}>
              Close
            </Text>
            </TouchableOpacity>
            </View>
          </Modal>
          <FlatList
            data={this.state.data}
            keyExtractor={({ id }, index) => id}
            renderItem={({item}) => this.renderItem(item)}
          />
        </View>
      )}
    </>
    );
  }

  setModalVisible(visible) {
    this.setState({ isModalVisible: visible });
  }

  renderItem(item) {
    return (
      
    <View>
      <TouchableOpacity style={styles.container}  onPress={() => {this.setState({selectedItem: item, isModalVisible: true})}}>
        <Text style ={styles.textDados}>
          Vendedor: {item.seller}   |   Cliente: {item.customer} 
        </Text>
        <Text style ={styles.textDados}>
          Valor: {item.value}
        </Text>
      </TouchableOpacity>
    </View>
    );
  }
  
}

const styles = StyleSheet.create({


  container: {
    height: 60,
    backgroundColor: '#424242',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 8,
    margin: 5,
    alignItems: 'center'
  },
  modalButton:{
    backgroundColor: '#424242',
    borderRadius: 4,
    marginLeft: 8,
    width: 60,
    height: 40,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerModal: {
    width: '70%',
    height: '15%',
    backgroundColor: '#424242',
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 60,
    marginTop: 200,
    alignItems: 'center',
    elevation: 7
    
  },
  textModal:{
    fontSize: 16,
    marginBottom: 30,
    color: '#E0E0E0'
  },
  textDados:{
    color: '#E0E0E0',
    marginBottom: 2,
  }
})
