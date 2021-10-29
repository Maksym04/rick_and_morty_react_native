import React from 'react';
import {View} from 'react-native';
import {HelperText} from 'react-native-paper';
import {InputContainerProps} from './../../../types/types';
import Info from '../Info/Info';
import Input from '../Input/Input';
import CloseButton from '../CloseButton/CloseButton';
import {ids, styles} from './InputContainerStyles';

const InputContainer: React.FC<InputContainerProps> = ({
  name,
  sendValue,
  handleSubmit,
  changeActiveSearchState,
  checkFormatError,
}) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer} data-media={ids.inputContainer}>
        <Info />
        <Input name={name} sendValue={sendValue} handleSubmit={handleSubmit} />
        <CloseButton changeActiveSearchState={changeActiveSearchState} />
      </View>
      <HelperText
        style={styles.helperText}
        type='error'
        visible={checkFormatError()}>
        Character names contain only letters and only one space
      </HelperText>
    </View>
  );
};

export default InputContainer;
