import { TouchableOpacity, StyleSheet, Platform, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function BackButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => router.push("/")}
      activeOpacity={0.7}
    >
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    left: 20,
    zIndex: 100,
  },
});