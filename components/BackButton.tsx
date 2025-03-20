// components/SettingsIcon.tsx
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SettingsIcon() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 25, // Adjust for better visibility
        left: 25,
        zIndex: 10, // Ensure it's above other elements
      }}
      onPress={() => router.back()} // Navigate to previous screen
    >
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
}


