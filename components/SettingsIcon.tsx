import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SettingsIcon() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 35,
        zIndex: 10,
        padding: 15,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#333',
        alignItems: 'center',
        right: 20,
        alignSelf: "center", // Ensure it's above other elements
      }}
      onPress={() => router.push("/settings")} // Navigate to the settings page
    >
      <Ionicons name="settings-outline" size={24} color="white" />
    </TouchableOpacity>
  );
}
