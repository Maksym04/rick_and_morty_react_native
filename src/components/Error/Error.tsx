import React from 'react';
import {Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBug} from '@fortawesome/free-solid-svg-icons';
import text from './../../locales/text.json';
import styles from './ErrorStyles';

const Error: React.FC = () => {
  return (
    <View style={styles.errorContainer}>
      <FontAwesomeIcon icon={faBug} size={100} style={styles.errorIcon} />
      <Text style={styles.errorText}>{text.error}</Text>
    </View>
  );
};

export default Error;
