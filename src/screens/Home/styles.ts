import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 20,
  },
  textMain: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    color: '#a3a3a3',
  },
  input: {
    flex: 1,
    backgroundColor: '#1f1e25',
    height: 56,
    borderRadius: 5,
    color: 'white',
    padding: 10,
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    marginTop: 5,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: 10,
    marginBottom: 42,
    width: '100%',
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listEmptyText: {
    color: '#a3a3a3',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
  },
})
