import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './LoadingStyles';

const Loading: React.FC = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='#ffffff' />
    </View>
  );
};

export default Loading;
