import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingOverlay = () => (
  <View style={styles.overlay}>
    <ActivityIndicator size="large" color="#fff" />
  </View>
);

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    zIndex: 10000,
  },
});

export default LoadingOverlay;