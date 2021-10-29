import StyleSheet from 'react-native-media-query';

export const {ids, styles} = StyleSheet.create({
  searchButtonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    height: 55,
    '@media (max-width:2000px) and (min-width:701px)': {
      height: 70,
    },
  },
  searchButton: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    width: '15%',
  },
  buttonIcon: {
    color: '#f5f5f5',
    marginRight: 15,
  },
});
