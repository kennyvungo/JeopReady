import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Text } from "react-native-elements";
import { Link, useLocalSearchParams } from "expo-router";
import { useCurrentScoreStore } from "../../globals";
import { useRouter } from "expo-router";
import { useScoreBoardStore } from "../../globals";
import { useEffect } from "react";
type DetailProps = {
  col: number;
  row: number;
  double: boolean;
};
export default function Detail(props: DetailProps) {
  const params = useLocalSearchParams();
  const currentScore = useCurrentScoreStore((state) => state.score);
  const increaseScore = useCurrentScoreStore((state) => state.increase);
  const currentBoard = useScoreBoardStore((state) => state.doubles);
  const updateBoardState = useScoreBoardStore((state) => state.updatedouble);
  const router = useRouter();
  const updateBoard = (status: string) => {
    let row = params.row;
    let col = params.col;
    currentBoard[Number(row)][Number(col)] = status;
    updateBoardState(currentBoard);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text> Current Score : {currentScore}</Text>
        <Text>
          {props.col}
          {props.row}
        </Text>
      </View>
      <View
        style={{
          flex: 10,
          backgroundColor: "white",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text> ${params.slug}</Text>
        <View style={styles.buttons}>
          <Pressable
            style={styles.correct}
            onPressIn={() => {
              increaseScore(Number(params.slug));
              updateBoard("correct");
              router.navigate("/double");
            }}
          >
            <Text>Correct</Text>
          </Pressable>
          <Pressable
            style={styles.skip}
            onPressIn={() => {
              updateBoard("skip");
              router.navigate("/double");
            }}
          >
            <Text>Skip</Text>
          </Pressable>
          <Pressable
            style={styles.wrong}
            onPressIn={() => {
              increaseScore(-Number(params.slug));
              updateBoard("wrong");
              router.navigate("/double");
            }}
          >
            <Text>Wrong</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.header}>
        <Link href="/double">BACK TO GAME</Link>
      </View>
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
    height: 100,
    width: 100,
    backgroundColor: "green",
    borderRadius: 10,
  },
  skip: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    backgroundColor: "orange",
    borderRadius: 10,
  },
  wrong: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    backgroundColor: "red",
    borderRadius: 10,
  },
  buttons: {
    width: 400,
    flex: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
