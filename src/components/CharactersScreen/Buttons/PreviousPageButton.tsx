import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {PreviousPageButtonProps} from './../../../types/types';
import {ids, styles} from './ButtonsStyles';

const PreviousPageButton: React.FC<PreviousPageButtonProps> = ({
  setPrevPage,
  showValuePrevPage,
}) => {
  return (
    <TouchableHighlight
      accessible={true}
      accessibilityLabel='Previous'
      accessibilityHint='Navigates to the previous page of characters'
      accessibilityRole='button'
      style={styles.button}
      onPress={setPrevPage}>
      <View style={styles.buttonTextContainer}>
        <Text style={styles.buttonText} data-media={ids.buttonText}>
          PREVIOUS{' '}
        </Text>
        <Text
          style={styles.showPageValueText}
          data-media={ids.showPageValueText}>
          ({showValuePrevPage})
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default PreviousPageButton;
