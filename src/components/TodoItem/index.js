import React from 'react';
import {Pressable, Text} from 'react-native';
import {DataStore} from 'aws-amplify';
import {Todo} from '../../models';
import Tag from '../Tag';
import {styles} from './styles';

const TodoItem = ({item}) => {
  async function deleteTodo(todo) {
    try {
      await DataStore.delete(todo);
    } catch (e) {
      console.log(`Delete failed: ${e}`);
    }
  }

  async function setComplete(updateValue, todo) {
    await DataStore.save(
      Todo.copyOf(todo, updated => {
        updated.isComplete = updateValue;
      }),
    );
  }
  return (
    <Pressable
      onLongPress={() => {
        deleteTodo(item);
      }}
      onPress={() => {
        setComplete(!item.isComplete, item);
      }}
      style={styles.todoContainer}>
      <Text>
        <Text style={styles.todoHeading}>{item.name}</Text>
        {`\n${item.description}\n`}
        <Tag data={item.tags} />
      </Text>
      <Text
        style={[styles.checkbox, item.isComplete && styles.completedCheckbox]}>
        {item.isComplete ? '✓' : ''}
      </Text>
    </Pressable>
  );
};

export default TodoItem;
