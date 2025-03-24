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
        right: 0,
        zIndex: 10,
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
        alignSelf: "center", // Ensure it's above other elements
      }}
      onPress={() => router.push("/settings")} // Navigate to the settings page
    >
      <Ionicons name="settings-outline" size={24} color="white" />
    </TouchableOpacity>
  );
}
