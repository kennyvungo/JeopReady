import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Link, useLocalSearchParams } from "expo-router";
export default function Detail() {
    const {slug} = useLocalSearchParams()
  return (
      <View style={{ flex: 1, flexDirection: "column", backgroundColor: "orange" }}>
        <View style={{ backgroundColor: "blue" }}>
          <Text>Detail {slug}</Text>
        </View>
        <Link href="/score"> BACK TO GAME</Link>
      </View>
  );
}

const styles = StyleSheet.create({});
