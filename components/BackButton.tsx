// components/SettingsIcon.tsx
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SettingsIcon() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => router.back()} // Navigate to previous screen
    >
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  backButton: {
    // backgroundColor: '#3b9eff',
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
    marginHorizontal: 20,
    marginBottom: 0,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: "center",
    width: 60,
    position: "absolute",
    top: 36,
  },
});


