// app/settings.tsx
import { View, Text, StyleSheet } from "react-native";
import BackButton from "../components/BackButton"; // Import the BackButton component

export default function SettingsPage() {
  return (
    <View style={styles.container}>
        <BackButton /> {/* Display the Back Button */}

      <Text style={styles.title}>Settings Page</Text>
      <Text style={styles.subtitle}>Here you can modify your settings.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
