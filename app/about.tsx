import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the back arrow
import SettingsIcon from "../components/SettingsIcon"; // Import the SettingsIcon
import BackButton from "../components/BackButton"; // Import the BackButton component
import GlobalWrapper from "../components/GlobalWrapper"; // Import GlobalWrapper

export default function AboutScreen() {
  const router = useRouter();

  return (
    <GlobalWrapper>
        <View style={styles.container}>
            <SettingsIcon /> {/* Display the Settings Icon */}
            <BackButton /> {/* Display the Back Button */}
            
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>About Page</Text>
        <Text style={styles.subtitle}>This is the About page of the app.</Text>
        </View>
    </GlobalWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50, // Add padding to avoid overlap with status bar
  },
  backButton: {
    position: "absolute",
    top: 25, // Adjust for better visibility
    left: 25,
    zIndex: 10, // Ensure it's above other elements
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
