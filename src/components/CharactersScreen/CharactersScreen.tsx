import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';
import {View} from 'react-native';
import {getCharacters} from '../../api/api';
import {Character, CharactersScreenProps} from './../../types/types';
import CharactersList from './CharactersList/CharactersList';
import Buttons from './Buttons/Buttons';
import Search from '../Search/Search';
import Loading from './../Loading/Loading';
import Error from './../Error/Error';
import styles from './CharactersScreenStyles';

const CharactersScreen = ({navigation}: CharactersScreenProps) => {
  const [characters, setCharacters] = useState<Array<Character>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [searchCaharacterName, setSearchCaharacterName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getData = useCallback(
    (page: number = 1, name: string = ''): void => {
      setIsLoading(true);
      setIsError(false);
      getCharacters(page, name)
        .then(response => {
          setCharacters(response.data.results);
          setTotalPage(response.data.info.pages);
          setCurrentPage(page);
        })
        .catch(error => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [currentPage]
  );

  useEffect(() => {
    getData();
  }, []);

  const statusIcon = (item: Character): ReactNode => {
    if (item.status === 'Alive') {
      return <View style={styles.greenCirle} />;
    } else if (item.status === 'unknown') {
      return <View style={styles.grayCirle} />;
    } else {
      return <View style={styles.redCirle} />;
    }
  };

  const setFirstPage = useCallback((): void => {
    setCurrentPage(1);
    getData(1, searchCaharacterName);
  }, [currentPage, searchCaharacterName]);

  const setNextPage = useCallback((): void => {
    setCurrentPage(prevPage => prevPage + 1);
    getData(currentPage + 1, searchCaharacterName);
  }, [currentPage, searchCaharacterName]);

  const setPrevPage = useCallback((): void => {
    setCurrentPage(prevPage => prevPage - 1);
    getData(currentPage - 1, searchCaharacterName);
  }, [currentPage, searchCaharacterName]);

  const showValuePrevPage = useMemo((): number => {
    const pageValue = currentPage - 1;
    return pageValue;
  }, [currentPage]);

  const showValueNextPage = useMemo((): number => {
    const pageValue = currentPage + 1;
    return pageValue;
  }, [currentPage]);

  const storeInputValue = (value: string): void => {
    setSearchCaharacterName(value);
  };

  const getSubmit = (): void => {
    getData(1, searchCaharacterName);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Search
            name={searchCaharacterName}
            getInputValue={storeInputValue}
            getSubmit={getSubmit}
          />
          <CharactersList
            characters={characters}
            navigation={navigation}
            statusIcon={statusIcon}
          />
          <Buttons
            page={currentPage}
            totalPage={totalPage}
            setFirstPage={setFirstPage}
            setNextPage={setNextPage}
            setPrevPage={setPrevPage}
            showValueNextPage={showValueNextPage}
            showValuePrevPage={showValuePrevPage}
          />
        </>
      )}
      {isError && <Error />}
    </View>
  );
};

export default CharactersScreen;
