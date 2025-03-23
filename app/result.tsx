import { View, Text, StyleSheet, TouchableOpacity, Platform, Dimensions } from "react-native";
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
        {/* Header */}
        <View style={styles.header}>
          <BackButton />
          <SettingsIcon />
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Extracted Text</Text>
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>{decodedText}</Text>
          </View>
        </View>

        {/* Footer Button */}
        <TouchableOpacity 
          style={styles.translateButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.buttonText}>New Translation</Text>
        </TouchableOpacity>
      </View>
    </GlobalWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 10,
    backgroundColor: '#1a1a1a',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 20,
    textAlign: 'center',
  },
  resultBox: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
    minHeight: 200,
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resultText: {
    fontSize: 18,
    color: "#fff",
    lineHeight: 24,
  },
  translateButton: {
    backgroundColor: '#3b9eff',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: Platform.OS === 'ios' ? 40 : 20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});