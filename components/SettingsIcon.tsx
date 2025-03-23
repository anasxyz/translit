import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import MaterialIcons
import { useRouter } from "expo-router";

export default function SettingsIcon() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 12,
        right: 5,
        zIndex: 10, // Ensure it's above other elements
      }}
      onPress={() => router.push("/settings")} // Navigate to the settings page
    >
      <Ionicons name="settings-outline" size={32} color="white" />
    </TouchableOpacity>
  );
}
