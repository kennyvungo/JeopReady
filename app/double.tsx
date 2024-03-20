import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Text } from "react-native-elements";
import { Link } from "expo-router";
import ScoreBox from "../components/scorebox";
import { useCurrentScoreStore, useScoreBoardStore } from "../globals";

export default function App() {
  const currentScore = useCurrentScoreStore((state) => state.score);
  const scoreBoard = useScoreBoardStore((state) => state.doubles);
  const updateBoardState = useScoreBoardStore((state) => state.updatedouble);
  const clearScore = useCurrentScoreStore((state) => state.clear);
  const currDate = new Date().toLocaleDateString();

  const emptyBoard = [
    ["new", "new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new", "new"],
    ["new", "new", "new", "new", "new", "new"],
  ];
  return (
    <View
      style={{ flex: 1, flexDirection: "column", backgroundColor: "#F6F6F6" }}
    >
      <View style={styles.header}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Link href="/score" style={{ flex: 1 }}>
            SINGLE
          </Link>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>
            Score :{" "}
            <Text style={currentScore >= 0 ? styles.positive : styles.negative}>
              {currentScore}
            </Text>
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>{currDate}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.row}>
          {scoreBoard[0].map((status, col) => (
            <ScoreBox
              key={col}
              col={col}
              row={0}
              score="400"
              status={status}
              double={true}
            />
          ))}
        </View>
        <View style={styles.row}>
          {scoreBoard[1].map((status, col) => (
            <ScoreBox
              key={col}
              col={col}
              row={1}
              score="800"
              status={status}
              double={true}
            />
          ))}
        </View>
        <View style={styles.row}>
          {scoreBoard[2].map((status, col) => (
            <ScoreBox
              key={col}
              col={col}
              row={2}
              score="1200"
              status={status}
              double={true}
            />
          ))}
        </View>
        <View style={styles.row}>
          {scoreBoard[3].map((status, col) => (
            <ScoreBox
              col={col}
              row={3}
              score="1600"
              status={status}
              double={true}
            />
          ))}
        </View>
        <View style={styles.row}>
          {scoreBoard[4].map((status, col) => (
            <ScoreBox
              col={col}
              row={4}
              score="2000"
              status={status}
              double={true}
            />
          ))}
        </View>
      </View>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Pressable
            onPressIn={() => {
              updateBoardState(emptyBoard);
              clearScore();
            }}
          >
            <Text>CLEAR</Text>
          </Pressable>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", flexDirection:'row'}}>
          <Link href="/"> BACK TO HOME</Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  body: {
    flex: 10,
    flexDirection: "column",
    backgroundColor: "#F6F6F6",
  },
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
});