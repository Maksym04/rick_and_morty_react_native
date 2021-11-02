import StyleSheet from 'react-native-media-query';

export const {ids, styles} = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    '@media (max-width:2000px) and (min-width:701px)': {
      height: 50,
    },
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  buttonTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    alignItems: 'center',
    fontSize: 15,
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 20,
    },
    color: '#fff',
  },
  showPageValueText: {
    alignItems: 'center',
    fontSize: 12,
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 17,
    },
    color: '#fff',
  },
});
