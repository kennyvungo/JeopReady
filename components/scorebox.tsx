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
    <View
      style={[
        {
          borderWidth: 1,
          borderColor: "black",
          borderStyle: "solid",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        },
        boxStyle,
      ]}
    >
      <Link
        href={{
          pathname: `/detail/${props.score}`,
          params: { col: props.col, row: props.row },
        }}
      >
        <Text style={props.status == 'skip' ? styles.skiptext : styles.text}>{props.score}</Text>
      </Link>
    </View>
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
    backgroundColor: "#204BA4",
  },
  skip: {
    backgroundColor: "white",
    pointerEvents: "none",
  },
  text: {
    textAlignVertical: "center",
    color: 'white'
  },
  skiptext:{
    color: 'blue'
  }
});
