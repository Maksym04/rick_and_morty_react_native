import React from 'react';
import {Image, Text, View} from 'react-native';
import text from './../../locales/text.json';
import {DetailsInfoProps} from '../../types/types';
import {ids, styles} from './DetailsInfoStyles';

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
        <Text style={styles.nameText} data-media={ids.nameText}>
          {name}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
          data-media={ids.image}
        />
      </View>
      <View style={styles.statusContainer}>
        {statusIcon}
        <Text style={styles.statusText} data-media={ids.statusText}>
          {status}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.captionText} data-media={ids.captionText}>
          {text.gender}
        </Text>
        <Text style={styles.infoText}>{gender}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.captionText} data-media={ids.captionText}>
          {text.episodesNumber}
        </Text>
        <Text style={styles.infoText}>{episodes}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.captionText} data-media={ids.captionText}>
          {text.species}
        </Text>
        <Text style={styles.infoText} data-media={ids.infoText}>
          {species}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.captionText} data-media={ids.captionText}>
          {text.lastLocation}
        </Text>
        <Text style={styles.infoText} data-media={ids.infoText}>
          {location}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.captionText} data-media={ids.captionText}>
          {text.origin}
        </Text>
        <Text style={styles.infoText} data-media={ids.infoText}>
          {origin}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.captionText} data-media={ids.captionText}>
          {text.created}
        </Text>
        <Text style={styles.lastInoText} data-media={ids.lastInoText}>
          {created}
        </Text>
      </View>
    </>
  );
};

export default DetailsInfo;
