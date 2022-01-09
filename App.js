import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";

import {AppNavigator} from "./routes/NavigateMainAndSketch";

export default function App() {
  LogBox.ignoreAllLogs();
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
