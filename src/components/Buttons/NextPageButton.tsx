import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {NextPageButtonProps} from '../../types/types';
import {ids, styles} from './ButtonsStyles';

const NextPageButton: React.FC<NextPageButtonProps> = ({
  setNextPage,
  showValueNextPage,
}) => {
  return (
    <TouchableHighlight
      accessible={true}
      accessibilityLabel='Next'
      accessibilityHint='Navigates to the next page of characters'
      accessibilityRole='button'
      style={styles.button}
      onPress={setNextPage}>
      <View style={styles.buttonTextContainer}>
        <Text style={styles.buttonText} data-media={ids.buttonText}>
          NEXT{' '}
        </Text>
        <Text
          style={styles.showPageValueText}
          data-media={ids.showPageValueText}>
          ({showValueNextPage})
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default NextPageButton;
