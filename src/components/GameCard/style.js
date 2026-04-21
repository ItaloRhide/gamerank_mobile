import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#dde4f2',
  },
  image: {
    width: '100%',
    height: 180,
    backgroundColor: '#d9e1f2',
  },
  info: {
    padding: 14,
  },
  name: {
    color: '#18243d',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  rating: {
    color: '#4b5b7a',
    fontSize: 15,
  },
});

export default styles;
