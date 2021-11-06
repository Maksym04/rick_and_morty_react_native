import React, {useCallback} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import text from './../../locales/text.json';
import {NavigationButtonsProps} from '../../types/types';
import {ids, styles} from './NavigationButtonsStyles';

const NavigationButtons: React.FC<NavigationButtonsProps> = ({navigation}) => {
  const goHome = useCallback((): void => {
    navigation.navigate('Home');
  }, []);

  const goBack = useCallback((): void => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        accessible={true}
        accessibilityLabel='Go home'
        accessibilityHint='Navigates to the home screen'
        accessibilityRole='button'
        style={styles.button}
        data-media={ids.button}
        onPress={goHome}>
        <View style={styles.homeIconContainer}>
          <FontAwesomeIcon icon={faHome} size={20} style={styles.homeIcon} />
          <Text style={styles.buttonText} data-media={ids.buttonText}>
            {text.home}
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
        onPress={goBack}>
        <Text style={styles.buttonText} data-media={ids.buttonText}>
          {text.goBack}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default NavigationButtons;
