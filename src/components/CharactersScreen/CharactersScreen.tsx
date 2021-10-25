import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import {getCharacters} from '../../api/api';
import {Character} from './../../types/types';
import {CharactersScreenProps} from './../../types/types';
import InitialInfo from './InitialInfo/InitialInfo';
import Buttons from './Buttons/Buttons';
import Loading from './../Loading/Loading';
import Error from './../Error/Error';
import {ids, styles} from './CharactersScreenStyles';

const CharactersScreen = ({navigation}: CharactersScreenProps) => {
  const [characters, setCharacters] = useState<Array<Character>>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const load = useCallback(() => {
    setIsLoading(true);
    getCharacters(page)
      .then(charactersList => {
        setCharacters(charactersList);
      })
      .catch(error => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  useEffect(() => {
    load();
  }, [load, page]);

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
    setPage(1);
  }, [page]);

  const setPrevPage = useCallback((): void => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const setNextPage = useCallback((): void => {
    if (page < 34) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  }, [page]);

  const showValuePrevPage = useMemo((): number | string => {
    if (page > 1) {
      const pageValue = page - 1;
      return pageValue;
    } else {
      return `-`;
    }
  }, [page]);

  const showValueNextPage = useMemo((): number => {
    if (page < 34) {
      const pageValue = page + 1;
      return pageValue;
    } else {
      return 1;
    }
  }, [page]);

  const _keyExtractor = (item: {id: Array<Character>}) => item.id;

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : <Error /> ? (
        <>
          <FlatList
            data={characters}
            renderItem={({item}: {item: Character}) => (
              <View style={styles.charactersBlock}>
                <TouchableOpacity
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
