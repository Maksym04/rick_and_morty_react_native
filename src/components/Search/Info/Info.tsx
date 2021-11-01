import React from 'react';
import {Text, View} from 'react-native';
import Tooltip from 'rn-tooltip';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
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
            <Text style={styles.infoHeaderText}>Search example:</Text>
            <Text style={styles.infoText}>Rick</Text>
            <Text style={styles.infoText}>Morty</Text>
            <Text style={styles.infoText}>Summer</Text>
            <Text style={styles.infoText}>Beth</Text>
            <Text style={styles.infoText}>Jerry</Text>
            <Text style={styles.infoBottomText}>
              To return to the full list of characters, you need to clear the
              search.
            </Text>
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
