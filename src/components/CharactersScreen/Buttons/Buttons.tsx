import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {ButtonsProps} from './../../../types/types';
import {ids, styles} from './ButtonsStyles';

const Buttons: React.FC<ButtonsProps> = ({
  showValueNextPage,
  showValuePrevPage,
  setFirstPage,
  setPrevPage,
  setNextPage,
  page,
  totalPage,
}) => {
  return (
    <>
      {page === 1 ? null : (
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
      )}
      {page === totalPage ? null : (
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
      )}
      {page === 1 ? null : (
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
      )}
    </>
  );
};

export default Buttons;
