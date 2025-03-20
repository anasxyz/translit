import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import SettingsIcon from "../components/SettingsIcon"; // Import the SettingsIcon
import BackButton from "../components/BackButton"; // Import the BackButton component
import GlobalWrapper from "../components/GlobalWrapper"; // Import GlobalWrapper

export default function HomeScreen() {
  const router = useRouter();

  return (
    <GlobalWrapper>
        <View style={styles.container}>
            <SettingsIcon />
            <BackButton />

        <Text style={styles.title}>Translation Result Page</Text>
        <Text style={styles.subtitle}>This is the translation result page</Text>

        <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push("/about")}
        >
            <Text style={styles.buttonText}>Go to About Page</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
