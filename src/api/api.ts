import axios from 'axios';

export interface Axios {
  results: any;
}

export const getCharacters = async (page: number) => {
  const url = 'https://rickandmortyapi.com/api/character/?page=' + page;
  const characters = await axios.get<Axios>(url).then(res => {
    return res.data.results;
  });
  return characters;
};
