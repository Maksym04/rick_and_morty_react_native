import React, {ReactNode} from 'react';
import {View, ScrollView} from 'react-native';
import {CharacterDetailsProps} from './../../types/types';
import DetailsInfo from './DetailsInfo/DetailsInfo';
import NavigationButtons from './NavigationButtons/NavigationButtons';
import styles from './CharacterDetailsScreenStyles';

const CharacterDetailsScreen: React.FC<CharacterDetailsProps> = ({
  route,
  navigation,
}) => {
  const {character} = route.params;

  const statusIcon = (): ReactNode => {
    if (character.status === 'Dead') {
      return <View style={styles.redCirle} />;
    } else if (character.status === 'unknown') {
      return <View style={styles.grayCirle} />;
    } else {
      return <View style={styles.greenCirle} />;
    }
  };

  return (
    <>
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
      </ScrollView>
      <NavigationButtons navigation={navigation} />
    </>
  );
};

export default CharacterDetailsScreen;
