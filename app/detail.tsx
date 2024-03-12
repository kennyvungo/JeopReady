import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Link } from "expo-router";
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, flexDirection: "column", backgroundColor: "orange" }}>
        <View style={{ backgroundColor: "blue" }}>
          <Text>Detail</Text>
        </View>
        <Link href="/score"> BACK TO GAME</Link>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
