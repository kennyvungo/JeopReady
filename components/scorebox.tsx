import React from "react";
import { Text } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
type ScoreBoxProps = {
  score: string;
  status: string;
  col: number;
  row: number;
  double: boolean;
};

export default function ScoreBox(props: ScoreBoxProps) {
  const router = useRouter()
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
    <Pressable
      style={[
        {
          borderWidth: 1,
          borderColor: "black",
          borderStyle: "solid",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        boxStyle,
      ]}
      onPressIn={() =>
        router.push({
          pathname: `/${props.double ? "doubledetail" : "detail"}/${props.score}`,
          params: { col: props.col, row: props.row, double: props.double },
        })
      }
    >
          <Text style={props.status == "skip" ? styles.skiptext : styles.text}>
            {props.score}
          </Text>
    </Pressable>
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
