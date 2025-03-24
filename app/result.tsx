import { View, StatusBar, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SettingsIcon from "../components/SettingsIcon";
import BackButton from "../components/BackButton";
import GlobalWrapper from "../components/GlobalWrapper";

export default function ResultScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const decodedText = decodeURIComponent(params.text as string);
  const detectedLanguage = params.detectedLanguage ? 
    decodeURIComponent(params.detectedLanguage as string) : undefined;
  const sourceLanguage = params.sourceLanguage ? 
    decodeURIComponent(params.sourceLanguage as string) : detectedLanguage;
  const targetLanguage = decodeURIComponent(params.targetLanguage as string);
  
  const displaySourceLanguage = sourceLanguage === "Auto" && detectedLanguage 
  ? detectedLanguage 
  : sourceLanguage;
  
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: StatusBar.currentHeight || 44, // Add this line
    paddingBottom: 10,
    backgroundColor: '#1a1a1a',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
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
  languageInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: '#1a1a1a',
    padding: 10,
    borderRadius: 10,
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
    marginBottom: 15,
    textAlign: 'center',
  },
  languageDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: '#1a1a1a',
    padding: 15, // Increased padding
    borderRadius: 10,
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
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
    minHeight: 200,
    maxHeight: 400, // Add maximum height
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
  scrollContent: {
    flexGrow: 1,
  },
  resultText: {
    fontSize: 18,
    color: "#fff",
    lineHeight: 24,
  },
});