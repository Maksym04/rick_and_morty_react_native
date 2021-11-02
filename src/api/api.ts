import axios, {AxiosResponse} from 'axios';
import {AxiosGetType} from './../types/types';

export const getCharacters = async (
  page: number,
  name: string
): Promise<AxiosResponse<AxiosGetType>> => {
  const BASE_URI = 'https://rickandmortyapi.com/api/character';
  return await axios.get<AxiosGetType>(
    `${BASE_URI}/?page=${page}&name=${encodeURIComponent(name)}`
  );
};
