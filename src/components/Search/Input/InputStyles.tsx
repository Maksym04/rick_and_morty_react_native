import StyleSheet from 'react-native-media-query';

export const {ids, styles} = StyleSheet.create({
  input: {
    width: '75%',
    color: '#c0c0c0',
    '@media (max-width:2000px) and (min-width:701px)': {
      marginRight: 40,
      fontSize: 20,
    },
    marginRight: 20,
    marginLeft: 10,
    borderBottomColor: '#83D2CB',
    borderBottomWidth: 2.5,
  },
});
