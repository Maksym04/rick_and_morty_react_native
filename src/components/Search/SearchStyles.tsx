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
  input: {
    width: '75%',
    color: '#c0c0c0',
    '@media (max-width:2000px) and (min-width:701px)': {
      marginRight: 40,
      fontSize: 20,
    },
    marginRight: 20,
    borderBottomColor: '#83D2CB',
    borderBottomWidth: 2.5,
  },
  searchButton: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    width: '15%',
  },
  closeButton: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    width: '15%',
    height: '100%',
  },
  buttonIcon: {
    color: '#f5f5f5',
    marginRight: 15,
  },
  helperText: {
    color: '#b22222',
    fontSize: 13,
    textAlign: 'center',
    position: 'absolute',
    top: 37,
    left: '15%',
  },
});
