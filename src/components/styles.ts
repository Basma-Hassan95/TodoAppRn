import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    fontSize: 16,
  },
});

export default styles;
