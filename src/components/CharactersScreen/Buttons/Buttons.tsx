import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {ButtonsProps} from './../../../types/types';
import {ids, styles} from './ButtonsStyles';

const Buttons: React.FC<ButtonsProps> = ({
  setFirstPage,
  setNextPage,
  setPrevPage,
  showValueNextPage,
  showValuePrevPage,
}) => {
  return (
    <>
      <TouchableHighlight
        accessible={true}
        accessibilityLabel='First'
        accessibilityHint='Navigates to the first page of characters'
        accessibilityRole='button'
        style={styles.button}
        onPress={setFirstPage}>
        <Text style={styles.buttonText} data-media={ids.buttonText}>
          FIRST
        </Text>
      </TouchableHighlight>
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
    </>
  );
};

export default Buttons;
