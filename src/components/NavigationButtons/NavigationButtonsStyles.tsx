import StyleSheet from 'react-native-media-query';

export const {ids, styles} = StyleSheet.create({
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
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '50%',
    height: 40,
    '@media (max-width:2000px) and (min-width:701px)': {
      height: 70,
    },
    backgroundColor: '#272B38',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  buttonText: {
    alignItems: 'center',
    fontSize: 14,
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 24,
    },
    color: '#fff',
  },
  homeIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  homeIcon: {
    color: '#ffffff',
    width: 36,
  },
});
