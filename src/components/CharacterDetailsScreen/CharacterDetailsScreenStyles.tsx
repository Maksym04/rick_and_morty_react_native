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
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonText: {
    alignItems: 'center',
    fontSize: 15,
    color: '#fff',
  },
});

export default styles;
