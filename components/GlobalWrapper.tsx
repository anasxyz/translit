// components/GlobalWrapper.tsx
import React from "react";
import { View, StyleSheet } from "react-native";

// The wrapper component accepts children to wrap the content
export default function GlobalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b9eff", // Default background color
  },
});
