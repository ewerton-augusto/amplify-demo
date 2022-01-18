import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {DataStore} from 'aws-amplify';
import {Todo} from '../../models';
import {TodoItem} from '..';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const subscription = DataStore.observeQuery(Todo).subscribe(snapshot => {
      const {items, isSynced} = snapshot;
      setTodos(items);
    });

    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

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
    <FlatList
      data={todos}
      keyExtractor={({id}) => id}
      renderItem={({item}) => (
        <TodoItem
          deleteTodo={deleteTodo}
          setComplete={setComplete}
          item={item}
        />
      )}
    />
  );
};

export default TodoList;
