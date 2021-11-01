import React from 'react';
import {TextInput} from 'react-native';
import {InputProps} from './../../../types/types';
import {ids, styles} from './InputStyles';

const Input: React.FC<InputProps> = ({name, sendValue, handleSubmit}) => {
  return (
    <TextInput
      accessible={true}
      accessibilityLabel='Characters search'
      accessibilityHint='Here you can search for all possible characters'
      accessibilityRole='search'
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
  );
};

export default Input;
