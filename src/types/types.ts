import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ReactNode} from 'react';

export interface Character {
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
}

export interface AxiosGetType {
  results: Array<Character>;
}

export type StackParamList = {
  Home: undefined;
  Characters: undefined;
  CharacterDetails: {character: Character};
};

export type HomeScreenProps = NativeStackScreenProps<StackParamList, 'Home'>;

export type CharactersScreenProps = NativeStackScreenProps<
  StackParamList,
  'Characters'
>;

export type CharacterDetailsProps = NativeStackScreenProps<
  StackParamList,
  'CharacterDetails'
>;

export interface InitialInfoProps {
  image: string;
  name: string;
  statusIcon: ReactNode;
  status: string;
  species: string;
  location: string;
  origin: string;
}

export interface ButtonsProps {
  setFirstPage: () => void;
  setNextPage: () => void;
  setPrevPage: () => void;
  showValueNextPage: number;
  showValuePrevPage: number | string;
}

export interface DetailsInfoProps {
  name: string;
  image: string;
  statusIcon: ReactNode;
  status: string;
  gender: string;
  episodes: number;
  species: string;
  location: string;
  origin: string;
  created: string;
}
