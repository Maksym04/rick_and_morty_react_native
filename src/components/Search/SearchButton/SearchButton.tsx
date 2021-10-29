import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {SearchButtonProps} from './../../../types/types';
import {ids, styles} from './SearchButtonStyles';

const SearchButton: React.FC<SearchButtonProps> = ({
  changeActiveSearchState,
}) => {
  return (
    <View style={styles.searchButtonContainer}>
      <TouchableWithoutFeedback
        accessible={true}
        accessibilityLabel='Search'
        accessibilityHint='A character search bar will appear on the device screen'
        accessibilityRole='button'
        style={styles.searchButton}
        data-media={ids.searchButton}
        onPress={changeActiveSearchState}>
        <FontAwesomeIcon icon={faSearch} size={20} style={styles.buttonIcon} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SearchButton;
