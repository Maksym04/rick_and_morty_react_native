import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {CloseButtonProps} from './../../../types/types';
import styles from './CloseButtonStyles';

const CloseButton: React.FC<CloseButtonProps> = ({changeActiveSearchState}) => {
  return (
    <TouchableWithoutFeedback
      accessible={true}
      accessibilityLabel='Close search'
      accessibilityHint='The search bar will disappear from the device screen'
      accessibilityRole='button'
      style={styles.closeButton}
      onPress={changeActiveSearchState}>
      <FontAwesomeIcon icon={faTimes} size={20} style={styles.buttonIcon} />
    </TouchableWithoutFeedback>
  );
};

export default CloseButton;
