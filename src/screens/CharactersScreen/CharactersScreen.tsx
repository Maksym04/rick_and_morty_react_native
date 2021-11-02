import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {View} from 'react-native';
import {getCharacters} from '../../api/api';
import {Character, CharactersScreenProps} from './../../types/types';
import CharactersList from '../../components/CharactersList/CharactersList';
import Buttons from '../../components/Buttons/Buttons';
import Search from './../../components/Search/Search';
import Loading from './../../components/Loading/Loading';
import Error from './../../components/Error/Error';
import styles from './CharactersScreenStyles';

const CharactersScreen: React.FC<CharactersScreenProps> = ({navigation}) => {
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

  const statusIcon = (item: Character): JSX.Element | undefined => {
    switch (true) {
      case item.status === 'Alive':
        {
          return <View style={styles.greenCirle} />;
        }
        break;
      case item.status === 'unknown':
        {
          return <View style={styles.grayCirle} />;
        }
        break;
      case item.status === 'Dead': {
        return <View style={styles.redCirle} />;
      }
    }
  };

  const setFirstPage = useCallback((): void => {
    setCurrentPage(1);
    getData(1, searchCaharacterName);
  }, [getData, searchCaharacterName]);

  const setNextPage = useCallback((): void => {
    setCurrentPage(prevPage => prevPage + 1);
    getData(currentPage + 1, searchCaharacterName);
  }, [getData, searchCaharacterName]);

  const setPrevPage = useCallback((): void => {
    setCurrentPage(prevPage => prevPage - 1);
    getData(currentPage - 1, searchCaharacterName);
  }, [getData, searchCaharacterName]);

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
