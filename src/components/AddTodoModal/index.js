import React, {useState} from 'react';
import {DataStore} from 'aws-amplify';
import {Todo} from '../../models';
import {Modal, TextInput, Text, View, Pressable} from 'react-native';
import {styles} from './styles';
import {globalStyles} from '../../theme/styles';

const AddTodoModal = ({modalVisible, setModalVisible}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  async function addTodo() {
    await DataStore.save(new Todo({name, description, isComplete: false}));
    setModalVisible(false);
    setName('');
    setDescription('');
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <Modal
      animationType="fade"
      onRequestClose={closeModal}
      transparent
      visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInnerContainer}>
          <Pressable onPress={closeModal} style={styles.modalDismissButton}>
            <Text style={styles.modalDismissText}>X</Text>
          </Pressable>
          <TextInput
            onChangeText={setName}
            placeholder="Name"
            style={styles.modalInput}
          />
          <TextInput
            onChangeText={setDescription}
            placeholder="Description"
            style={styles.modalInput}
          />
          <Pressable onPress={addTodo} style={globalStyles.buttonContainer}>
            <Text style={globalStyles.buttonText}>Save Todo</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AddTodoModal;
