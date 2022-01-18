import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

const TodoItem = ({item, deleteTodo, setComplete}) => (
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
      {`\n${item.description}`}
    </Text>
    <Text
      style={[styles.checkbox, item.isComplete && styles.completedCheckbox]}>
      {item.isComplete ? '✓' : ''}
    </Text>
  </Pressable>
);

export default TodoItem;
