import React from 'react';
import {View, Text, ScrollView, TouchableHighlight} from 'react-native';
import DetailsInfo from './DetailsInfo/DetailsInfo';
import styles from './CharacterDetailsScreenStyles';

interface CharacterDetailsScreenProps {
  route: any;
  navigation: any;
}

const CharacterDetailsScreen: React.FC<CharacterDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const {character} = route.params;

  const statusIcon = () => {
    if (character.status === 'Dead') {
      return <View style={styles.redCirle} />;
    } else if (character.status === 'unknown') {
      return <View style={styles.grayCirle} />;
    } else {
      return <View style={styles.greenCirle} />;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <DetailsInfo
        name={character.name}
        image={character.image}
        statusIcon={statusIcon()}
        status={character.status}
        gender={character.gender}
        episodes={character.episode.length}
        species={character.species}
        location={character.location.name}
        origin={character.origin.name}
        created={character.created}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go back</Text>
      </TouchableHighlight>
    </ScrollView>
  );
};

export default CharacterDetailsScreen;
