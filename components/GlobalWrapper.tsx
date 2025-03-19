// components/GlobalWrapper.tsx
import React from "react";
import { View, StyleSheet } from "react-native";

// The wrapper component accepts children to wrap the content
export default function GlobalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      {children} {/* Render the child content (pages) inside the wrapper */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#248eab", // Default background color
  },
});
