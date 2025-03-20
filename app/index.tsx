import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import SettingsIcon from "../components/SettingsIcon";
import GlobalWrapper from "../components/GlobalWrapper";

export default function HomeScreen() {
  const router = useRouter();
  const [inputText, setInputText] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

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
          <Text style={styles.language}>English ▼</Text>
          <Text style={styles.language}>to German ▼</Text>
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
  language: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  textInput: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
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
    flexDirection: "column", // Keep items stacked vertically
  },
  historyHeader: {
    flexDirection: "row", // Items will be positioned horizontally
    justifyContent: "space-between", // Space between the title and 'more'
    alignItems: "center", // Align items vertically in the center
    marginBottom: 20, // Add space below the header
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: "bold",
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
  historyMore: {
    color: "#007bff",
    fontSize: 16,
  },
});
