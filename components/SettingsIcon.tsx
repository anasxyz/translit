import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons
import { useRouter } from "expo-router";

export default function SettingsIcon() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 10, // Ensure it's above other elements
      }}
      onPress={() => router.push("/settings")} // Navigate to the settings page
    >
      <MaterialIcons name="settings" size={30} color="white" />
    </TouchableOpacity>
  );
}
