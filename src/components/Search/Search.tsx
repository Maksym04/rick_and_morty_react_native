import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {SearchProps} from '../../types/types';
import SearchButton from './SearchButton/SearchButton';
import InputContainer from './InputContainer/InputContainer';

const Search: React.FC<SearchProps> = ({name, getInputValue, getSubmit}) => {
  const [isActiveSearch, setIsActiveSearch] = useState<boolean>(false);

  let sendValue = (value: string): void => {
    getInputValue(value);
  };

  const textFormat: RegExp = /^[a-zA-Z]*\s?$/;

  const checkFormatError = (): boolean => {
    return !textFormat.test(name);
  };

  const handleSubmit = (): void => {
    getSubmit();
  };

  const changeActiveSearchState = useCallback((): void => {
    setIsActiveSearch(!isActiveSearch);
  }, [isActiveSearch]);

  return (
    <View>
      {!isActiveSearch ? (
        <SearchButton changeActiveSearchState={changeActiveSearchState} />
      ) : (
        <InputContainer
          name={name}
          sendValue={sendValue}
          handleSubmit={handleSubmit}
          changeActiveSearchState={changeActiveSearchState}
          checkFormatError={checkFormatError}
        />
      )}
    </View>
  );
};

export default Search;
