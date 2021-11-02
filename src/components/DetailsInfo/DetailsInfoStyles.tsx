import StyleSheet from 'react-native-media-query';

export const {ids, styles} = StyleSheet.create({
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    color: '#DDDDDD',
    fontSize: 28,
    '@media (max-width:2000px) and (min-width:701px)': {
      paddingTop: 30,
      paddingBottom: 25,
      fontSize: 38,
    },
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 15,
  },
  image: {
    width: 260,
    height: 260,
    '@media (max-width:2000px) and (min-width:701px)': {
      width: 360,
      height: 360,
    },
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  statusText: {
    color: '#DDDDDD',
    paddingLeft: 10,
    fontSize: 20,
    '@media (max-width:2000px) and (min-width:701px)': {
      paddingTop: 25,
      paddingBottom: 25,
      fontSize: 30,
    },
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
  },
  captionText: {
    color: '#888B93',
    fontSize: 16,
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 26,
    },
    fontWeight: '400',
  },
  infoText: {
    color: '#DDDDDD',
    fontSize: 17,
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 27,
      paddingBottom: 20,
    },
    fontWeight: '500',
    paddingBottom: 10,
  },
  lastInoText: {
    color: '#DDDDDD',
    fontSize: 17,
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 27,
      paddingBottom: 50,
    },
    fontWeight: '500',
    paddingBottom: 30,
  },
});
