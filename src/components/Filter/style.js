import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#eef2fb',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#22304d',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#1f3c88',
    borderRadius: 14,
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  genreList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genreButton: {
    backgroundColor: '#dbe4ff',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  genreButtonActive: {
    backgroundColor: '#1f3c88',
  },
  genreText: {
    color: '#1f3c88',
    fontWeight: '600',
  },
  genreTextActive: {
    color: '#ffffff',
  },
});

export default styles;
