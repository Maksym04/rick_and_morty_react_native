import StyleSheet from 'react-native-media-query';

export const {ids, styles} = StyleSheet.create({
  charactersBlock: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    borderBottomColor: '#3C3E44',
    borderBottomWidth: 2,
    width: '100%',
  },
  characterBlock: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '90%',
    marginTop: 7,
    marginBottom: 7,
    backgroundColor: '#3C3E44',
    overflow: 'hidden',
    borderRadius: 12,
    '@media (max-width:2000px) and (min-width:701px)': {
      height: 300,
    },
  },
});
