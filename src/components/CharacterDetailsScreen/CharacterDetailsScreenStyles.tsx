import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#272B38',
    width: '100%',
  },
  greenCirle: {
    borderRadius: 50,
    width: 13,
    height: 13,
    backgroundColor: '#32CD32',
  },
  grayCirle: {
    borderRadius: 50,
    width: 13,
    height: 13,
    backgroundColor: '#808080',
  },
  redCirle: {
    borderRadius: 50,
    width: 13,
    height: 13,
    backgroundColor: '#FF0000',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
    width: '100%',
    height: 40,
  },
  buttonText: {
    alignItems: 'center',
    fontSize: 15,
    color: '#fff',
  },
});

export default styles;
