import React, {useState} from 'react';
import {Pressable, Text} from 'react-native';
import {Header, TodoList, AddTodoModal} from './components';
import {globalStyles} from './theme/styles';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Header />
      <TodoList />
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={[globalStyles.buttonContainer, globalStyles.floatingButton]}>
        <Text style={globalStyles.buttonText}>+ Add Todo</Text>
      </Pressable>
      <AddTodoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default Home;
