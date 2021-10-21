import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 300,
    height: 380,
  },
  text: {
    textAlign: 'center',
    fontSize: 70,
    color: '#778899',
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
    width: 120,
    height: 40,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
});

export default styles;
