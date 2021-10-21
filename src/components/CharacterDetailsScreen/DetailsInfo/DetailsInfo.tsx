import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './DetailsInfoStyles';

interface DetailsInfoProps {
  name: string;
  image: string;
  statusIcon: any;
  status: string;
  gender: string;
  episodes: number;
  species: string;
  location: string;
  origin: string;
  created: string;
}

const DetailsInfo: React.FC<DetailsInfoProps> = ({
  name,
  image,
  statusIcon,
  status,
  gender,
  episodes,
  species,
  location,
  origin,
  created,
}) => {
  return (
    <>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={{width: 260, height: 260}}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.statusText}>
          {statusIcon} {status}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.captionText}>Gender:</Text>
        <Text style={styles.infoText}>{gender}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.captionText}>Number of episodes:</Text>
        <Text style={styles.infoText}>{episodes}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.captionText}>Species:</Text>
        <Text style={styles.infoText}>{species}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.captionText}>Last known location:</Text>
        <Text style={styles.infoText}>{location}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.captionText}>Origin:</Text>
        <Text style={styles.infoText}>{origin}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.captionText}>Was created:</Text>
        <Text style={styles.lastInoText}>{created}</Text>
      </View>
    </>
  );
};

export default DetailsInfo;
