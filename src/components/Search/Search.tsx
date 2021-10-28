import React, {useState} from 'react';
import {TextInput, View, TouchableWithoutFeedback} from 'react-native';
import {HelperText} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {SearchProps} from '../../types/types';
import {ids, styles} from './SearchStyles';

const Search: React.FC<SearchProps> = ({name, getInputValue, getSubmit}) => {
  const [isActiveSearch, setIsActiveSearch] = useState<boolean>(false);

  let sendValue = (value: string): void => {
    getInputValue(value);
  };

  const textFormat: RegExp = /^[a-zA-Z]*$/;

  const checkFormatError = (): boolean => {
    return !textFormat.test(name);
  };

  const handleSubmit = () => {
    getSubmit();
  };

  const changeActiveSearchState = () => {
    setIsActiveSearch(!isActiveSearch);
  };

  return (
    <View>
      {!isActiveSearch ? (
        <View style={styles.searchButtonContainer}>
          <TouchableWithoutFeedback
            accessible={true}
            accessibilityLabel='Search'
            accessibilityHint='A character search bar will appear on the device screen'
            accessibilityRole='button'
            style={styles.searchButton}
            data-media={ids.searchButton}
            onPress={changeActiveSearchState}>
            <FontAwesomeIcon
              icon={faSearch}
              size={20}
              style={styles.buttonIcon}
            />
          </TouchableWithoutFeedback>
        </View>
      ) : (
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer} data-media={ids.inputContainer}>
            <TextInput
              style={styles.input}
              data-media={ids.input}
              placeholder='Search for characters...'
              placeholderTextColor='#c0c0c0'
              value={name}
              onChangeText={sendValue}
              keyboardType='web-search'
              onSubmitEditing={handleSubmit}
              autoFocus={true}
            />
            <TouchableWithoutFeedback
              accessible={true}
              accessibilityLabel='Close search'
              accessibilityHint='The search bar will disappear from the device screen'
              accessibilityRole='button'
              style={styles.closeButton}
              onPress={changeActiveSearchState}>
              <FontAwesomeIcon
                icon={faTimes}
                size={20}
                style={styles.buttonIcon}
              />
            </TouchableWithoutFeedback>
          </View>
          <HelperText
            style={styles.helperText}
            type='error'
            visible={checkFormatError()}>
            Character names don't contain numbers
          </HelperText>
        </View>
      )}
    </View>
  );
};

export default Search;
