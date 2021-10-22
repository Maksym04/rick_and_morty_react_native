import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './ButtonsStyles';

interface ButtonsProps {
  setFirstPage: () => void;
  setNextPage: () => void;
  setPrevPage: () => void;
  showValueNextPage: number;
  showValuePrevPage: number | string;
}

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
        <Text style={styles.buttonText}>FIRST</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={setNextPage}>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>NEXT </Text>
          <Text style={styles.showPageValueText}>({showValueNextPage})</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={setPrevPage}>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>PREVIOUS </Text>
          <Text style={styles.showPageValueText}>({showValuePrevPage})</Text>
        </View>
      </TouchableHighlight>
    </>
  );
};

export default Buttons;
