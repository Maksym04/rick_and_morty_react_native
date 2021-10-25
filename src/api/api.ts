import axios from 'axios';
import {Character, AxiosGetType} from './../types/types';

export const getCharacters = async (
  page: number
): Promise<Array<Character>> => {
  const uri = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const {
    data: {results},
  } = await axios.get<AxiosGetType>(uri);
  return results;
};
