import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
import {BASE_URI} from '../../api/api';
import {
  Character,
  CharactersScreenProps,
  AxiosGetType,
} from './../../types/types';
import InitialInfo from './InitialInfo/InitialInfo';
import Buttons from './Buttons/Buttons';
import Search from '../Search/Search';
import Loading from './../Loading/Loading';
import Error from './../Error/Error';
import {ids, styles} from './CharactersScreenStyles';

const CharactersScreen = ({navigation}: CharactersScreenProps) => {
  const [characters, setCharacters] = useState<Array<Character>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [searchCaharacterName, setSearchCaharacterName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getData = useCallback(
    (page: number = 1, name: string = '') => {
      setIsLoading(true);
      axios
        .get<AxiosGetType>(
          `${BASE_URI}/?page=${page}&name=${encodeURIComponent(name)}`
        )
        .then(response => {
          setCharacters(response.data.results);
          setTotalPage(response.data.info.pages);
          setCurrentPage(page);
        })
        .catch(error => {
          setIsError(error.message);
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
      ) : <Error /> ? (
        <>
          <Search
            name={searchCaharacterName}
            getInputValue={storeInputValue}
            getSubmit={getSubmit}
          />
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
                  onPress={() => {
                    navigation.navigate({
                      name: 'CharacterDetails',
                      params: {character: item},
                    });
                  }}>
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
      ) : null}
    </View>
  );
};

export default CharactersScreen;
