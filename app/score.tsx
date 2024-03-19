import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Text } from 'react-native-elements'
import { Link } from 'expo-router'
import ScoreBox from '../components/scorebox'
import { useCurrentScoreStore, useScoreBoardStore } from '../globals'

export default function App(){
  const currentScore = useCurrentScoreStore((state) => state.score);
  const scoreBoard = useScoreBoardStore((state) => state.status);
  const updateBoardState = useScoreBoardStore((state) => state.update);
  const clearScore = useCurrentScoreStore((state) => state.clear);

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
      style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}
    >
      <View style={styles.header}>
        <Pressable onPressIn={() => {
          updateBoardState(emptyBoard)
          clearScore()
        }
        } style={{ flex: 1 }}>
          <Text>CLEAR</Text>
        </Pressable>
        <Text>Current Score : {currentScore}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.row}>
          {scoreBoard[0].map((status, col) => (
            <ScoreBox key={col} col={col} row={0} score="100" status={status} />
          ))}
        </View>
        <View style={styles.row}>
          {scoreBoard[1].map((status, col) => (
            <ScoreBox key={col} col={col} row={1} score="200" status={status} />
          ))}
        </View>
        <View style={styles.row}>
          {scoreBoard[2].map((status, col) => (
            <ScoreBox key={col} col={col} row={2} score="300" status={status} />
          ))}
        </View>
        <View style={styles.row}>
          {scoreBoard[3].map((status, col) => (
            <ScoreBox col={col} row={3} score="400" status={status} />
          ))}
        </View>
        <View style={styles.row}>
          {scoreBoard[4].map((status, col) => (
            <ScoreBox col={col} row={4} score="500" status={status} />
          ))}
        </View>
        <View style={styles.row}>
          {scoreBoard[5].map((status, col) => (
            <ScoreBox col={col} row={5} score="600" status={status} />
          ))}
        </View>
      </View>
      <View style={styles.header}>
        <Link href="/"> BACK TO HOME</Link>
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
  body: {
    flex: 15,
    flexDirection: 'column',
    backgroundColor: "white",
  },
  column:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

