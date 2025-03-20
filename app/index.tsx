import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import SettingsIcon from "../components/SettingsIcon"; // Import the SettingsIcon
import GlobalWrapper from "../components/GlobalWrapper"; // Import GlobalWrapper

export default function HomeScreen() {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  return (
    <GlobalWrapper>
        <View style={styles.container}>
            <SettingsIcon />

        <Text style={styles.title}>Homepage</Text>
        <Text style={styles.subtitle}>This is the homepage</Text>

        <TextInput 
          style={styles.input}
          placeholder="Enter some text"
          value={inputText}
          onChangeText={setInputText}
        />

        <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push({ pathname: "/result", params: { text: encodeURIComponent(inputText) } })}
        >
            <Text style={styles.buttonText}>Translate</Text>
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
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
