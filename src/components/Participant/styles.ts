import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: 'white',
    marginLeft: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    marginTop: 5,
  },
  button: {
    width: 56,
    height: 56,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
