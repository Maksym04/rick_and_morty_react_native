import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {FirstPageButtonProps} from './../../../types/types';
import {ids, styles} from './ButtonsStyles';

const FirstPageButton: React.FC<FirstPageButtonProps> = ({setFirstPage}) => {
  return (
    <TouchableHighlight
      accessible={true}
      accessibilityLabel='Previous'
      accessibilityHint='Navigates to the first page of characters'
      accessibilityRole='button'
      style={styles.button}
      onPress={setFirstPage}>
      <View style={styles.buttonTextContainer}>
        <Text style={styles.buttonText} data-media={ids.buttonText}>
          FIRST
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default FirstPageButton;
