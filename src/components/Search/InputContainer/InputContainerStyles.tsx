import StyleSheet from 'react-native-media-query';

export const {ids, styles} = StyleSheet.create({
  searchContainer: {
    height: 55,
    '@media (max-width:2000px) and (min-width:701px)': {
      height: 70,
    },
    position: 'relative',
  },
  inputContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: '#262626',
  },
  helperText: {
    color: '#b22222',
    fontSize: 13,
    textAlign: 'center',
    position: 'absolute',
    top: 30,
    left: '8%',
  },
});
