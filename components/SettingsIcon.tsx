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
        top: 15,
        right: 10,
        zIndex: 10, // Ensure it's above other elements
      }}
      onPress={() => router.push("/settings")} // Navigate to the settings page
    >
      <Ionicons name="settings-outline" size={24} color="white" />
    </TouchableOpacity>
  );
}
