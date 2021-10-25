import StyleSheet from 'react-native-media-query';

export const {ids, styles} = StyleSheet.create({
  imageBlock: {
    width: '45%',
  },
  infoContainer: {
    width: '55%',
    paddingLeft: 6,
  },
  characterName: {
    color: '#ffffff',
    fontSize: 27,
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 40,
    },
    paddingTop: 12,
    paddingBottom: 2,
  },
  characterStatusContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  characterStatus: {
    paddingLeft: 10,
    color: '#ffffff',
    fontSize: 15,
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 25,
    },
  },
  characterLocationBox: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  characterLocationHeader: {
    fontSize: 14,
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 20,
    },
    color: 'rgb(158, 158, 158)',
  },
  characterLocation: {
    fontSize: 15,
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 22,
    },
    color: '#ffffff',
  },
  characterOriginBox: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  characterOriginHeader: {
    fontSize: 14,
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 20,
    },
    color: 'rgb(158, 158, 158)',
  },
  characterOrigin: {
    fontSize: 15,
    '@media (max-width:2000px) and (min-width:701px)': {
      fontSize: 22,
    },
    color: '#ffffff',
  },
});
