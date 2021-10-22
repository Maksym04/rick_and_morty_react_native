import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import CharactersScreen from './src/components/CharactersScreen/CharactersScreen';
import CharacterDetailsScreen from './src/components/CharacterDetailsScreen/CharacterDetailsScreen';

enableScreens(false);

type StackParamList = {
  Home: undefined;
  Characters: undefined;
  CharacterDetails: {character: any};
};

const Stack = createStackNavigator<StackParamList>();

export type HomeScreenProps = NativeStackScreenProps<StackParamList, 'Home'>;

export type CharactersScreenProps = NativeStackScreenProps<
  StackParamList,
  'Characters'
>;

export type CharacterDetailsProps = NativeStackScreenProps<
  StackParamList,
  'CharacterDetails'
>;

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' detachInactiveScreens={false}>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#262626',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name='Characters'
          component={CharactersScreen}
          options={{
            title: 'Characters',
            headerStyle: {
              backgroundColor: '#262626',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name='CharacterDetails'
          component={CharacterDetailsScreen}
          options={{
            title: 'Character',
            headerStyle: {
              backgroundColor: '#262626',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
