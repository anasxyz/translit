import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker"; // Import Picker for dropdowns
import SettingsIcon from "../components/SettingsIcon";
import GlobalWrapper from "../components/GlobalWrapper";

export default function HomeScreen() {
  const router = useRouter();
  const [inputText, setInputText] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState("English"); // Default source language
  const [targetLanguage, setTargetLanguage] = useState("German"); // Default target language

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => setIsKeyboardOpen(true));
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => setIsKeyboardOpen(false));

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <GlobalWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Header with Language Selection and Settings Icon */}
        <View style={styles.header}>
          {/* Language selection area moved to the right */}
          <View style={styles.languageSelectContainer}>
            <Picker
              selectedValue={sourceLanguage}
              style={styles.picker}
              onValueChange={(itemValue) => setSourceLanguage(itemValue)}
            >
              <Picker.Item label="English" value="English" />
              <Picker.Item label="Spanish" value="Spanish" />
              <Picker.Item label="French" value="French" />
              <Picker.Item label="Chinese" value="Chinese" />
              {/* Add more languages as needed */}
            </Picker>
            <Text style={styles.languageText}>to</Text>
            <Picker
              selectedValue={targetLanguage}
              style={styles.picker}
              onValueChange={(itemValue) => setTargetLanguage(itemValue)}
            >
              <Picker.Item label="German" value="German" />
              <Picker.Item label="Italian" value="Italian" />
              <Picker.Item label="Portuguese" value="Portuguese" />
              <Picker.Item label="Japanese" value="Japanese" />
              {/* Add more languages as needed */}
            </Picker>
          </View>
          <SettingsIcon />
        </View>

        {/* Text Input Area */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter text"
          placeholderTextColor="#fff"
          value={inputText}
          onChangeText={setInputText}
        />

        {/* Translate Button */}
        <TouchableOpacity
          style={styles.translateButton}
          onPress={() => router.push({ pathname: "/result", params: { text: encodeURIComponent(inputText) } })}
        >
          <Text style={styles.translateButtonText}>Translate</Text>
        </TouchableOpacity>

        {/* Camera & Mic Icons */}
        <View style={styles.iconContainer}>
          <Ionicons name="camera" size={30} color="white" />
          <Ionicons name="mic" size={30} color="white" />
        </View>

        {/* Hide history when keyboard is open */}
        {!isKeyboardOpen && (
          <View style={styles.historyContainer}>
            <View style={styles.historyHeader}>
              <Text style={styles.historyTitle}>History</Text>
              <Text style={styles.historyMore}>
                more <Ionicons name="caret-forward-outline" />
              </Text>
            </View>

            <View style={styles.historyItem}>
              <Text style={styles.historyText}>早上好</Text>
              <Text style={styles.historyTranslation}>Good Morning</Text>
            </View>
            <View style={styles.historyItem}>
              <Text style={styles.historyText}>isso é loucura</Text>
              <Text style={styles.historyTranslation}>That's crazy</Text>
            </View>
            <View style={styles.historyItem}>
              <Text style={styles.historyText}>aku perlu membeli cangkir biru</Text>
              <Text style={styles.historyTranslation}>I need to buy a blue cup</Text>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </GlobalWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b9eff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  languageSelectContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", // Align the language dropdowns to the right
  },
  picker: {
    height: 50,
    width: 120, // Set width for dropdowns
    color: "#fff",
  },
  languageText: {
    color: "#fff",
    fontSize: 18,
    marginHorizontal: 0, // Space between source and target language
  },
  translateButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  translateButtonText: {
    color: "#3b9eff",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
    marginBottom: 30,
  },
  historyContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between", // Align History title and 'more' to opposite sides
    alignItems: "center",
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  historyMore: {
    color: "#007bff",
    fontSize: 16,
  },
  historyItem: {
    marginBottom: 20,
  },
  historyText: {
    fontSize: 16,
    color: "#666",
  },
  historyTranslation: {
    fontSize: 16,
    color: "#007bff",
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
});
