import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Text } from 'react-native-elements'
import { Link } from 'expo-router'
import ScoreBox from '../components/scorebox'
import { useCurrentScoreStore, useScoreBoardStore } from '../globals'

export default function App(){
  const currentScore = useCurrentScoreStore((state)=> state.score)
  const increaseScore = useCurrentScoreStore((state) => state.increase)
  const scoreBoard = useScoreBoardStore((state) => state.status)
  return (
    <View
      style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}
    >
      <View style={styles.header}>
        <Text>Current Score : {currentScore}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.column}>
          <ScoreBox score="100" status="new" />
          <ScoreBox score="200" status= "new" />
          <ScoreBox score="300" status="new" />
          <ScoreBox score="400" status="new" />
          <ScoreBox score="500" status="wrong" />
        </View>
        <View style={styles.column}>
          <ScoreBox score="100" status="new" />
          <ScoreBox score="200" status="new" />
          <ScoreBox score="300" status="new" />
          <ScoreBox score="400" status="new" />
          <ScoreBox score="500" status="new" />
        </View>
        <View style={styles.column}>
          <ScoreBox score="100" status="new" />
          <ScoreBox score="200" status="new" />
          <ScoreBox score="300" status="new" />
          <ScoreBox score="400" status="new" />
          <ScoreBox score="500" status="new" />
        </View>
        <View style={styles.column}>
          <ScoreBox score="100" status="new" />
          <ScoreBox score="200" status="new" />
          <ScoreBox score="300" status="new" />
          <ScoreBox score="400" status="new" />
          <ScoreBox score="500" status="new" />
        </View>
        <View style={styles.column}>
          <ScoreBox score="100" status="new" />
          <ScoreBox score="200" status="new" />
          <ScoreBox score="300" status="new" />
          <ScoreBox score="400" status="new" />
          <ScoreBox score="500" status="new" />
        </View>
        <View style={styles.column}>
          <ScoreBox score="100" status="new" />
          <ScoreBox score="200" status="new" />
          <ScoreBox score="300" status="new" />
          <ScoreBox score="400" status="new" />
          <ScoreBox score="500" status="new" />
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
    flexDirection: 'row',
    backgroundColor: "white",
  },
  column:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  }
});

