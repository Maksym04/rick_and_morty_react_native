import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {NavigationButtonsProps} from '../../types/types';
import {ids, styles} from './NavigationButtonsStyles';

const NavigationButtons: React.FC<NavigationButtonsProps> = ({navigation}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        accessible={true}
        accessibilityLabel='Go home'
        accessibilityHint='Navigates to the home screen'
        accessibilityRole='button'
        style={styles.button}
        data-media={ids.button}
        onPress={() => navigation.navigate('Home')}>
        <View style={styles.homeIconContainer}>
          <FontAwesomeIcon icon={faHome} size={20} style={styles.homeIcon} />
          <Text style={styles.buttonText} data-media={ids.buttonText}>
            Home
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        accessible={true}
        accessibilityLabel='Go back'
        accessibilityHint='Navigates to the previous screen'
        accessibilityRole='button'
        style={styles.button}
        data-media={ids.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText} data-media={ids.buttonText}>
          Go back
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default NavigationButtons;
