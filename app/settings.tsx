// app/settings.tsx
import { View, Text, StyleSheet } from "react-native";
import BackButton from "../components/BackButton"; // Import the BackButton component
import GlobalWrapper from "@/components/GlobalWrapper";

export default function SettingsPage() {
  return (
    <GlobalWrapper>
        <View style={styles.container}>
            <BackButton />

        <Text style={styles.title}>Settings Page</Text>
        <Text style={styles.subtitle}>Here you can modify your settings.</Text>
        </View>
    </GlobalWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
