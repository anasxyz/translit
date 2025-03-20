import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import SettingsIcon from "../components/SettingsIcon";
import BackButton from "../components/BackButton";
import GlobalWrapper from "../components/GlobalWrapper";

export default function ResultScreen() {
  const router = useRouter();
  const { text } = useLocalSearchParams();

  // Ensure `text` is a string (handle array case)
  const decodedText = text ? decodeURIComponent(Array.isArray(text) ? text[0] : text) : "No text provided";

  return (
    <GlobalWrapper>
      <View style={styles.container}>
        <SettingsIcon />
        <BackButton />

        <Text style={styles.title}>Translation Result Page</Text>
        <Text style={styles.subtitle}>This is the translation result page</Text>

        <Text style={styles.resultText}>{decodedText}</Text>

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
  resultText: {
    fontSize: 18,
    color: "#000",
    marginBottom: 20,
    fontWeight: "bold",
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
