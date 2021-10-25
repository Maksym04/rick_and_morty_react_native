import StyleSheet from 'react-native-media-query';

export const {ids, styles} = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
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
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 100,
    },
    color: '#778899',
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080',
    width: 120,
    height: 40,
    '@media (max-width:2000px) and (min-width:701px)': {
      width: 200,
      height: 60,
    },
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 25,
    },
    color: '#fff',
  },
});
