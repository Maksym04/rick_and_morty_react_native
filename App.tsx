import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import CharactersScreen from './src/components/CharactersScreen/CharactersScreen';
import CharacterDetailsScreen from './src/components/CharacterDetailsScreen/CharacterDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          name='Character'
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
