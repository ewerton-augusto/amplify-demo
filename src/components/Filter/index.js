import React, {useState} from 'react';
import {View, TextInput, Pressable, Text} from 'react-native';
import {globalStyles} from '../../theme';
import {styles} from './styles';

function Filter() {
  const [filter, setFilter] = useState('');

  const searchTodoByTag = () => {};

  return (
    <View>
      <TextInput
        onChangeText={setFilter}
        placeholder="Filter by tag"
        style={styles.modalInput}
      />
      <Pressable onPress={searchTodoByTag} style={globalStyles.buttonContainer}>
        <Text style={globalStyles.buttonText}>Search</Text>
      </Pressable>
    </View>
  );
}

export default Filter;
