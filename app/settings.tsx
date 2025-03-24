import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../components/BackButton";
import SettingsIcon from "../components/SettingsIcon";
import GlobalWrapper from "../components/GlobalWrapper";

export default function SettingsScreen() {
  return (
    <GlobalWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.title}>Settings</Text>
          <SettingsIcon />
        </View>

        <View style={styles.content}>
          <TouchableOpacity style={styles.settingButton}>
            <View style={styles.buttonContent}>
              <Ionicons name="person-outline" size={24} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Account</Text>
              <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.chevron} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingButton}>
            <View style={styles.buttonContent}>
              <Ionicons name="notifications-outline" size={24} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Notifications</Text>
              <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.chevron} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingButton}>
            <View style={styles.buttonContent}>
              <Ionicons name="moon-outline" size={24} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Appearance</Text>
              <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.chevron} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingButton}>
            <View style={styles.buttonContent}>
              <Ionicons name="lock-closed-outline" size={24} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Privacy</Text>
              <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.chevron} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingButton}>
            <View style={styles.buttonContent}>
              <Ionicons name="help-circle-outline" size={24} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Help & Support</Text>
              <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.chevron} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingButton}>
            <View style={styles.buttonContent}>
              <Ionicons name="information-circle-outline" size={24} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>About</Text>
              <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.chevron} />
            </View>
          </TouchableOpacity>
        </View>
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
    paddingTop: StatusBar.currentHeight || 44,
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    textAlign: 'center',
    justifyContent: "center",
    right: 160,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  settingButton: {
    height: 60,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
    marginBottom: 15,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonIcon: {
    marginRight: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    flex: 1,
  },
  chevron: {
    opacity: 0.7,
  },
});