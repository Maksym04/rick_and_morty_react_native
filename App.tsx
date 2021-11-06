import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {StackParamList, Screen} from './src/types/types';
import HomeScreen from './src/screens/Home/HomeScreen';
import CharactersScreen from './src/screens/CharactersScreen/CharactersScreen';
import CharacterDetailsScreen from './src/screens/CharacterDetailsScreen/CharacterDetailsScreen';
import GlobalStyles from './GlobalStyles';

enableScreens(false);

const App: React.FC = () => {
  const Stack = createStackNavigator<StackParamList>();

  return (
    <NavigationContainer>
      <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
        <Stack.Navigator
          initialRouteName={Screen.Home}
          detachInactiveScreens={false}>
          <Stack.Screen
            name={Screen.Home}
            component={HomeScreen}
            options={{
              headerTitle: 'Home',
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
            name={Screen.Characters}
            component={CharactersScreen}
            options={{
              headerTitle: 'Characters',
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
            name={Screen.CharacterDetails}
            component={CharacterDetailsScreen}
            options={{
              headerTitle: 'Character',
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
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
