import React from 'react';
import {FlatList, Text} from 'react-native';
import {styles} from './styles';

const Tag = ({data}) => {
  return (
    <FlatList
      style={styles.tagContainer}
      data={data}
      keyExtractor={({item}) => item}
      renderItem={({item}) => <Text style={styles.tagText}>{item}</Text>}
    />
  );
};

export default Tag;
