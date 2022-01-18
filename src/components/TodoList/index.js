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

  return (
    <FlatList
      data={todos}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <TodoItem item={item} />}
    />
  );
};

export default TodoList;
