import React from 'react';
import { View, ActivityIndicator, StyleSheet, StatusBar, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LoadingOverlay = () => (
  <View style={styles.overlay}>
    <StatusBar backgroundColor="rgba(26, 26, 26, 0.8)" translucent barStyle="light-content" />
    <ActivityIndicator size="large" color="#fff" />
  </View>
);

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: -50, // Extend beyond screen edges
    right: -50,
    top: -50,
    bottom: -50,
    width: width + 100, // Add extra width
    height: height + 100, // Add extra height
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    zIndex: 10000,
    elevation: 10000,
  },
});

export default LoadingOverlay;