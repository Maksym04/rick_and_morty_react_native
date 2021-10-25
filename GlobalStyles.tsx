import {StyleSheet, Platform} from 'react-native';

const GlobalStyles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#262626',
    paddingTop: Platform.OS === 'android' ? 10 : 0,
  },
});

export default GlobalStyles;
