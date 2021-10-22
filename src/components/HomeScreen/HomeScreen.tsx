import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import {HomeScreenProps} from './../../../App';
import styles from './HomeScreenStyles';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  type RickAndMortyImageUri = {
    uri: string;
  };

  const rickAndMortyImage: RickAndMortyImageUri = {
    uri: 'https://i.ebayimg.com/images/g/-4wAAOSweI1cPBNA/s-l300.jpg',
  };

  const showCharacters = (): void => {
    navigation.navigate('Characters');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={rickAndMortyImage} />
      <Text style={styles.text}>Rick and Morty</Text>
      <TouchableHighlight style={styles.button} onPress={showCharacters}>
        <Text style={styles.buttonText}>Characters</Text>
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreen;
