import React, {useCallback} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Character, CharactersListProps, Screen} from '../../types/types';
import InitialInfo from '../InitialInfo/InitialInfo';
import {ids, styles} from './CharactersListStyles';

const CharactersList: React.FC<CharactersListProps> = ({
  characters,
  navigation,
  statusIcon,
}) => {
  const goToCharactersDetails = useCallback((item: Character): void => {
    navigation.navigate({
      name: Screen.CharacterDetails,
      params: {character: item},
    });
  }, []);

  return (
    <FlatList
      data={characters}
      renderItem={({item}: {item: Character}) => (
        <View style={styles.charactersBlock}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel='Character details'
            accessibilityHint='Navigates to the character details'
            accessibilityRole='menuitem'
            style={styles.characterBlock}
            data-media={ids.characterBlock}
            onPress={() => goToCharactersDetails(item)}>
            <InitialInfo
              image={item.image}
              name={item.name}
              statusIcon={statusIcon(item)}
              status={item.status}
              species={item.species}
              location={item.location.name}
              origin={item.origin.name}
            />
          </TouchableOpacity>
        </View>
      )}
      numColumns={1}
      keyExtractor={(item: Character) => item.id.toString()}
    />
  );
};

export default CharactersList;
