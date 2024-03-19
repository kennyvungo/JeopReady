import React from "react";
import { Text } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
type ScoreBoxProps = {
  score: string;
  status: string;
  col: number;
  row: number;
};

export default function ScoreBox(props: ScoreBoxProps) {
  let boxStyle = {};
  switch (props.status) {
    case "correct":
      boxStyle = styles.correct;
      break;
    case "wrong":
      boxStyle = styles.wrong;
      break;
    case "new":
      boxStyle = styles.new;
      break;
    case "skip":
      boxStyle = styles.skip;
      break;
  }
  return (
    <Link
      href={{
        pathname:`/detail/${props.score}`,
        params: { col: props.col, row: props.row },
      }}
      style={[
        {
          borderWidth: 1,
          borderColor: "black",
          borderStyle: "solid",
          padding: 12,
          paddingVertical: 30,
          flex: 1,
        },
        boxStyle,
      ]}
    >
      <Text>{props.score}</Text>
    </Link>
  );
}
const styles = StyleSheet.create({
  correct: {
    backgroundColor: "green",
    pointerEvents: "none",
  },
  wrong: {
    backgroundColor: "red",
    pointerEvents: "none",
  },
  new: {
    backgroundColor: "white",
  },
  skip: {
    backgroundColor: "orange",
    pointerEvents: "none",
  },
});
