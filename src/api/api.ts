import axios from 'axios';

export interface AxiosGetType {
  results: Array<{
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
    image: string;
    episode: {
      length: number;
    };
    created: string;
  }>;
}

export const getCharacters = async (page: number) => {
  const uri = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const characters = await axios.get<AxiosGetType>(uri).then(res => {
    return res.data.results;
  });
  return characters;
};
