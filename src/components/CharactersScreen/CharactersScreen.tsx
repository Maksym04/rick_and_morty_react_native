import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import {getCharacters} from '../../api/api';
import InitialInfo from './InitialInfo/InitialInfo';
import Buttons from './Buttons/Buttons';
import Loading from './../Loading/Loading';
import Error from './../Error/Error';
import styles from './CharactersScreenStyles';

interface CharactersScreenProps {
  navigation: any;
}

const CharactersScreen: React.FC<CharactersScreenProps> = ({navigation}) => {
  const [characters, setCharacters] = useState<(string | number)[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const load = useCallback(() => {
    setIsLoading(true);
    getCharacters(page)
      .then(data => {
        setCharacters(data);
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

  const statusIcon = (item: any) => {
    if (item.status === 'Alive') {
      return <View style={styles.greenCirle} />;
    } else if (item.status === 'unknown') {
      return <View style={styles.grayCirle} />;
    } else {
      return <View style={styles.redCirle} />;
    }
  };

  const setFirstPage = useCallback(() => {
    setPage(1);
  }, [page]);

  const setPrevPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const setNextPage = useCallback(() => {
    if (page < 34) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  }, [page]);

  const showValuePrevPage = useMemo(() => {
    if (page > 1) {
      const pageValue = page - 1;
      return pageValue;
    } else {
      return `-`;
    }
  }, [page]);

  const showValueNextPage = useMemo(() => {
    if (page < 34) {
      const pageValue = page + 1;
      return pageValue;
    } else {
      return 1;
    }
  }, [page]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : <Error /> ? (
        <>
          <FlatList
            data={characters}
            renderItem={({item}: any) => (
              <View style={styles.charactersBlock}>
                <TouchableOpacity
                  style={styles.characterBlock}
                  onPress={() => {
                    navigation.navigate('Character', {
                      character: item,
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
            keyExtractor={(item: any) => item.id}
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
