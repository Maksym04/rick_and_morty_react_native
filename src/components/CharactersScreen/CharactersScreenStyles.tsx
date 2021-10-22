import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#272B38',
  },
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
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: '#3C3E44',
    overflow: 'hidden',
    borderRadius: 12,
  },
  greenCirle: {
    borderRadius: 50,
    width: 10,
    height: 10,
    backgroundColor: '#32CD32',
  },
  grayCirle: {
    borderRadius: 50,
    width: 10,
    height: 10,
    backgroundColor: '#808080',
  },
  redCirle: {
    borderRadius: 50,
    width: 10,
    height: 10,
    backgroundColor: '#FF0000',
  },
  inputText: {
    backgroundColor: '#262626',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default styles;
