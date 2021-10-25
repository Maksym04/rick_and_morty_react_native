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
      <TouchableHighlight style={styles.button} onPress={setFirstPage}>
        <Text style={styles.buttonText} data-media={ids.buttonText}>
          FIRST
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={setNextPage}>
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
      <TouchableHighlight style={styles.button} onPress={setPrevPage}>
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
