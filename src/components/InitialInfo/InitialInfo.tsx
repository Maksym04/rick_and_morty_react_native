import React from 'react';
import {Image, Text, View} from 'react-native';
import {InitialInfoProps} from '../../types/types';
import text from './../../locales/text.json';
import {ids, styles} from './InitialInfoStyles';

const InitialInfo: React.FC<InitialInfoProps> = ({
  image,
  name,
  statusIcon,
  status,
  species,
  location,
  origin,
}) => {
  return (
    <>
      <View style={styles.imageBlock}>
        <Image
          source={{
            uri: image,
          }}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.characterName} data-media={ids.characterName}>
          {name}
        </Text>
        <View style={styles.characterStatusContainer}>
          {statusIcon}
          <Text style={styles.characterStatus} data-media={ids.characterStatus}>
            {status} - {species}
          </Text>
        </View>

        <View style={styles.characterLocationBox}>
          <Text style={styles.characterLocationHeader}>
            {text.lastLocation}
          </Text>
          <Text
            style={styles.characterLocation}
            data-media={ids.characterLocation}>
            {location}
          </Text>
        </View>
        <View style={styles.characterOriginBox}>
          <Text
            style={styles.characterOriginHeader}
            data-media={ids.characterOriginHeader}>
            {text.origin}
          </Text>
          <Text style={styles.characterOrigin} data-media={ids.characterOrigin}>
            {origin}
          </Text>
        </View>
      </View>
    </>
  );
};

export default InitialInfo;
