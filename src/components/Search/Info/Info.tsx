import React from 'react';
import {Text, View} from 'react-native';
import Tooltip from 'rn-tooltip';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import text from './../../../locales/text.json';
import styles from './InfoStyles';

const Info: React.FC = () => {
  return (
    <View
      accessible={true}
      accessibilityLabel='Search information'
      accessibilityHint='A quick overview of the correct search'
      accessibilityRole='alert'>
      <Tooltip
        popover={
          <View>
            <Text style={styles.infoHeaderText}>{text.searchExample}</Text>
            <Text style={styles.infoText}>{text.exampleCharacters[1]}</Text>
            <Text style={styles.infoText}>{text.exampleCharacters[2]}</Text>
            <Text style={styles.infoText}>{text.exampleCharacters[3]}</Text>
            <Text style={styles.infoText}>{text.exampleCharacters[4]}</Text>
            <Text style={styles.infoText}>{text.exampleCharacters[5]}</Text>
            <Text style={styles.infoBottomText}>{text.exampleText}</Text>
          </View>
        }
        actionType='press'
        width={200}
        height={200}
        containerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}>
        <FontAwesomeIcon icon={faInfoCircle} size={24} color='#f5f5f5' />
      </Tooltip>
    </View>
  );
};

export default Info;
