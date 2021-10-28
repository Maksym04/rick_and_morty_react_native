import React, {ReactNode} from 'react';
import {View, Text, ScrollView, TouchableHighlight} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {CharacterDetailsProps} from './../../types/types';
import DetailsInfo from './DetailsInfo/DetailsInfo';
import {ids, styles} from './CharacterDetailsScreenStyles';

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
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          accessible={true}
          accessibilityLabel='Go home'
          accessibilityHint='Navigates to the home screen'
          accessibilityRole='button'
          style={styles.button}
          data-media={ids.button}
          onPress={() => navigation.navigate('Home')}>
          <View style={styles.homeIconContainer}>
            <FontAwesomeIcon icon={faHome} size={20} style={styles.homeIcon} />
            <Text style={styles.buttonText} data-media={ids.buttonText}>
              Home
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          accessible={true}
          accessibilityLabel='Go back'
          accessibilityHint='Navigates to the previous screen'
          accessibilityRole='button'
          style={styles.button}
          data-media={ids.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText} data-media={ids.buttonText}>
            Go back
          </Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default CharacterDetailsScreen;
