import axios from 'axios';

type Axios = {
  results: (string | number)[];
};

export const getCharacters = async (page: number) => {
  const uri = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const characters = await axios.get<Axios>(uri).then(res => {
    return res.data.results;
  });
  return characters;
};
