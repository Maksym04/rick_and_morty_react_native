import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './InitialInfoStyles';

interface InitialInfoProps {
  image: string;
  name: string;
  statusIcon: any;
  status: string;
  species: string;
  location: string;
  origin: string;
}

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
        <Text style={styles.characterName}>{name}</Text>
        <Text style={styles.characterStatus}>
          {statusIcon} {status} - {species}
        </Text>
        <View style={styles.characterLocationBox}>
          <Text style={styles.characterLocationHeader}>
            Last known location:
          </Text>
          <Text style={styles.characterLocation}>{location}</Text>
        </View>
        <View style={styles.characterOriginBox}>
          <Text style={styles.characterOriginHeader}>Origin:</Text>
          <Text style={styles.characterOrigin}>{origin}</Text>
        </View>
      </View>
    </>
  );
};

export default InitialInfo;
