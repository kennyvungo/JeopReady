import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet, Pressable } from "react-native";
import { Text } from "react-native-elements";
import { Link, useLocalSearchParams } from "expo-router";
import { useCurrentScoreStore } from "../../globals";
import { useRouter } from "expo-router";
export default function Detail() {
  const { slug } = useLocalSearchParams();
  const currentScore = useCurrentScoreStore((state) => state.score);
  const increaseScore = useCurrentScoreStore((state) => state.increase);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text> Current Score: {currentScore}</Text>
      </View>
      <View
        style={{
          flex: 15,
          backgroundColor: "white",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text> ${slug}</Text>
        <View style={styles.buttons}>
          <Pressable
            style={styles.correct}
            onPressIn={() => {
              increaseScore(Number(slug));
              router.navigate("/score");
            }}
          >
            <Text>Correct</Text>
          </Pressable>
          <Pressable
            style={styles.skip}
            onPressIn={() => {
              router.navigate("/score");
            }}
          >
            <Text>Skip</Text>
          </Pressable>
          <Pressable
            style={styles.wrong}
            onPressIn={() => {
              increaseScore(-Number(slug));
              router.navigate("/score");
            }}
          >
            <Text>Wrong</Text>
          </Pressable>
        </View>
      </View>
      <Link style={styles.header} href="/score">
        {" "}
        BACK TO GAME
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  correct: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 100,
    backgroundColor: "green",
    borderRadius: 40,
  },
  skip:{
      justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 100,
    backgroundColor: "orange",
    borderRadius: 30,
  },
  wrong: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 100,
    backgroundColor: "red",
    borderRadius: 30,
  },
  buttons: {
    width: 400,
    flex: 11,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
