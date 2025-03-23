import React, { ReactNode } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

interface GlobalWrapperProps {
  children: ReactNode;
}

export default function GlobalWrapper({ children }: GlobalWrapperProps) {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.safeArea}>
        {children}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    bottom: 45,
  },
});