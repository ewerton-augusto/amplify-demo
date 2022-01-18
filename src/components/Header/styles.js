import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#ba000d',
    paddingTop: Platform.OS === 'ios' ? 44 : null,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 16,
    textAlign: 'center',
  },
});
