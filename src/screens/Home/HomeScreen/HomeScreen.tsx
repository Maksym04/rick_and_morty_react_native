import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import {HomeScreenProps} from './../../../types/types';
import {ids, styles} from './HomeScreenStyles';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const showCharacters = (): void => {
    navigation.navigate('Characters');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./../../../images/background_image.jpg')}
      />
      <Text style={styles.text} data-media={ids.text}>
        Rick and Morty
      </Text>
      <TouchableHighlight
        accessible={true}
        accessibilityLabel='Characters list'
        accessibilityHint='Navigates to the characters list'
        accessibilityRole='menu'
        style={styles.button}
        data-media={ids.button}
        onPress={showCharacters}>
        <Text style={styles.buttonText} data-media={ids.buttonText}>
          Characters
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreen;
