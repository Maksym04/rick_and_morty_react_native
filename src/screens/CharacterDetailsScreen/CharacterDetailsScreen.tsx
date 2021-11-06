import React, {useCallback} from 'react';
import {View, ScrollView} from 'react-native';
import {CharacterDetailsProps} from './../../types/types';
import DetailsInfo from '../../components/DetailsInfo/DetailsInfo';
import NavigationButtons from '../../components/NavigationButtons/NavigationButtons';
import styles from './CharacterDetailsScreenStyles';

const CharacterDetailsScreen: React.FC<CharacterDetailsProps> = ({
  route,
  navigation,
}) => {
  const {character} = route.params;

  const statusIcon = useCallback((): JSX.Element | undefined => {
    switch (true) {
      case character.status === 'Alive':
        {
          return <View style={styles.greenCirle} />;
        }
        break;
      case character.status === 'unknown':
        {
          return <View style={styles.grayCirle} />;
        }
        break;
      case character.status === 'Dead': {
        return <View style={styles.redCirle} />;
      }
    }
  }, []);

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
