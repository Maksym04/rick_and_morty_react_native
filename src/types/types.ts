import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

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

export interface Info {
  pages: number;
}

export interface AxiosGetType {
  results: Array<Character>;
  info: Info;
}

export enum Screen {
  Home = 'Home',
  Characters = 'Characters',
  CharacterDetails = 'CharacterDetails',
}

export type StackParamList = {
  Home: undefined;
  Characters: undefined;
  CharacterDetails: {character: Character};
};

export type HomeScreenProps = NativeStackScreenProps<StackParamList, 'Home'>;

export type CharactersScreenProps = NativeStackScreenProps<
  StackParamList,
  Screen.Characters
>;

export type CharacterDetailsProps = NativeStackScreenProps<
  StackParamList,
  Screen.CharacterDetails
>;

export interface CharactersListProps {
  characters: Character[];
  navigation: NativeStackNavigationProp<StackParamList, 'Characters'>;
  statusIcon: (item: Character) => JSX.Element | undefined;
}

export interface InitialInfoProps {
  image: string;
  name: string;
  statusIcon: JSX.Element | undefined;
  status: string;
  species: string;
  location: string;
  origin: string;
}

export interface ButtonsProps {
  showValuePrevPage: number;
  showValueNextPage: number;
  setFirstPage: () => void;
  setPrevPage: () => void;
  setNextPage: () => void;
  page: number;
  totalPage: number;
}

export interface FirstPageButtonProps {
  setFirstPage: () => void;
}

export interface PreviousPageButtonProps {
  showValuePrevPage: number;
  setPrevPage: () => void;
}

export interface NextPageButtonProps {
  showValueNextPage: number;
  setNextPage: () => void;
}

export interface DetailsInfoProps {
  name: string;
  image: string;
  statusIcon: JSX.Element | undefined;
  status: string;
  gender: string;
  episodes: number;
  species: string;
  location: string;
  origin: string;
  created: string;
}

export interface NavigationButtonsProps {
  navigation: NativeStackNavigationProp<StackParamList, 'CharacterDetails'>;
}

export interface SearchProps {
  name: string;
  getInputValue: (value: string) => void;
  getSubmit: () => void;
}

export interface SearchButtonProps {
  changeActiveSearchState: () => void;
}

export interface InputContainerProps {
  name: string;
  sendValue: (value: string) => void;
  handleSubmit: () => void;
  changeActiveSearchState: () => void;
  checkFormatError: () => boolean;
}

export interface InputProps {
  name: string;
  sendValue: (value: string) => void;
  handleSubmit: () => void;
}

export interface CloseButtonProps {
  changeActiveSearchState: () => void;
}
