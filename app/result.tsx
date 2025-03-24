import { View, StatusBar, ScrollView,  Text, TextInput, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SettingsIcon from "../components/SettingsIcon";
import BackButton from "../components/BackButton";
import GlobalWrapper from "../components/GlobalWrapper";
import * as Clipboard from 'expo-clipboard';

export default function ResultScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const decodedText = decodeURIComponent(params.text as string).trim();
  const detectedLanguage = params.detectedLanguage ? 
    decodeURIComponent(params.detectedLanguage as string).trim() : undefined;
  const sourceLanguage = params.sourceLanguage ? 
    decodeURIComponent(params.sourceLanguage as string).trim() : detectedLanguage;
  const targetLanguage = decodeURIComponent(params.targetLanguage as string).trim();
  const originalText = decodeURIComponent(params.originalText as string).trim();

  const displaySourceLanguage = sourceLanguage === "Auto" && detectedLanguage 
  ? detectedLanguage 
  : sourceLanguage;

  const [showCopyFeedback, setShowCopyFeedback] = useState(false);
  
  const handleCopy = async () => {
    try {
      await Clipboard.setStringAsync(decodedText);
      setShowCopyFeedback(true);
      setTimeout(() => setShowCopyFeedback(false), 2000); // Hide after 2 seconds
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };
  
  return (
    <GlobalWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <SettingsIcon />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Translation</Text>
          
          <View style={styles.languageDirection}>
            <Text style={styles.languageText}>{displaySourceLanguage}</Text>
            <Ionicons name="arrow-forward" size={20} color="#3b9eff" style={styles.arrow} />
            <Text style={styles.languageText}>{targetLanguage}</Text>
          </View>

          <View style={styles.originalBox}>
            <ScrollView 
              showsVerticalScrollIndicator={true}
              contentContainerStyle={styles.scrollContent}
            >
              <Text style={styles.originalText}>
                {originalText}
              </Text>
            </ScrollView>
          </View>

          <View style={styles.resultBox}>
            <ScrollView 
              showsVerticalScrollIndicator={true}
              contentContainerStyle={styles.scrollContent}
            >
              <Text style={styles.resultText}>
                {decodedText}
              </Text>
            </ScrollView>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={[styles.actionButton]}
            onPress={handleCopy}
          >
            <Ionicons 
              name={showCopyFeedback ? "checkmark-outline" : "copy-outline"} 
              size={32} 
              color={showCopyFeedback ? "#4CAF50" : "#fff"} 
              style={styles.buttonIcon} 
            />          
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionButton]}>
            <Ionicons name="share-outline" size={32} color="#fff" style={styles.buttonIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionButton]}>
            <Ionicons name="bookmark-outline" size={32} color="#fff" style={styles.buttonIcon} />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionButton]}>
            <Ionicons name="volume-medium-outline" size={32} color="#fff" style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.translateButton}
          onPress={() => router.push("/")}
        >
          <View style={styles.buttonContent}>
            <Ionicons name="refresh-outline" size={32} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>New Translation</Text>
          </View>
        </TouchableOpacity>
      </View>
    </GlobalWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingTop: StatusBar.currentHeight || 44, // Add this line
    backgroundColor: '#1a1a1a',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 0,
    bottom: 17,
  },
  // resultBox: {
  //   backgroundColor: '#2a2a2a',
  //   borderRadius: 15,
  //   padding: 20,
  //   minHeight: 200,
  //   width: '100%',
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },
  translateButton: {
    marginHorizontal: 20,
    marginBottom: Platform.OS === 'ios' ? 40 : 20,
    height: 60,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
    top: 47,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
  },
  languageInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: '#1a1a1a',
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
  },
  languageLabel: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
    opacity: 0.7,
  },
  languageValue: {
    color: '#3b9eff',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    textAlign: 'center',
    bottom: 30,
  },
  languageDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    // backgroundColor: '#1a1a1a',
    padding: 15, // Increased padding
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
    minHeight: 55, // Added fixed height
  },
  languageText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 10,
    textAlignVertical: 'center', // Added vertical alignment
  },
  arrow: {
    marginHorizontal: 10,
    alignSelf: 'center', // Added alignment
  },
  // resultText: {
  //   fontSize: 18,
  //   color: "#fff",
  //   lineHeight: 24,
  //   textAlignVertical: 'top',
  //   minHeight: 200,
  //   padding: 0,
  // },
  resultBox: {
    padding: 20,
    minHeight: 200,
    // maxHeight: 400, // Add maximum height
    width: '100%',
    height: 260,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
  },
  scrollContent: {
    flexGrow: 1,
  },
  resultText: {
    fontSize: 18,
    color: "#fff",
    lineHeight: 24,
  },
  originalBox: {
    padding: 20,
    minHeight: 200,
    // maxHeight: 400, // Add maximum height
    width: '100%',
    height: 260,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
    marginBottom: 17,
  },
  originalText: {
    fontSize: 18,
    color: "#fff",
    lineHeight: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 15,
    top: 47,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    padding: 0,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
    height: 60,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonIcon: {
    // marginRight: 8,
  },
});