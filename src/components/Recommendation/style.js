import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#dde4f2',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#18243d',
    marginBottom: 10,
  },
  emptyText: {
    color: '#4b5b7a',
    fontSize: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f8',
  },
  position: {
    width: 28,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f3c88',
  },
  textBox: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    color: '#18243d',
    fontWeight: '600',
  },
  score: {
    fontSize: 14,
    color: '#4b5b7a',
  },
});

export default styles;
