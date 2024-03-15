import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Text } from 'react-native-elements'
import { Link } from 'expo-router'
import ScoreBox from '../components/scorebox'
import {create} from 'zustand'
import { useCurrentScoreStore } from '../globals'

export default function App(){
  const currentScore = useCurrentScoreStore((state)=> state.score)
  const increaseScore = useCurrentScoreStore((state) => state.increase)
  return (
      <View
        style={{ flex: 1, flexDirection: "column", backgroundColor: "red" }}
      >
        <View style={styles.header}>
          <Text>Current Score : {currentScore}</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.column}>
            <ScoreBox score="100" />
            <ScoreBox score="200" />
            <ScoreBox score="300" />
            <ScoreBox score="400" />
            <ScoreBox score="500" />
          </View>
          <View style={styles.column}>
            <ScoreBox score="100" />
            <ScoreBox score="200" />
            <ScoreBox score="300" />
            <ScoreBox score="400" />
            <ScoreBox score="500" />
          </View>
          <View style={styles.column}>
            <ScoreBox score="100" />
            <ScoreBox score="200" />
            <ScoreBox score="300" />
            <ScoreBox score="400" />
            <ScoreBox score="500" />
          </View>
          <View style={styles.column}>
            <ScoreBox score="100" />
            <ScoreBox score="200" />
            <ScoreBox score="300" />
            <ScoreBox score="400" />
            <ScoreBox score="500" />
          </View>
          <View style={styles.column}>
            <ScoreBox score="100" />
            <ScoreBox score="200" />
            <ScoreBox score="300" />
            <ScoreBox score="400" />
            <ScoreBox score="500" />
          </View>
          <View style={styles.column}>
            <ScoreBox score="100" />
            <ScoreBox score="200" />
            <ScoreBox score="300" />
            <ScoreBox score="400" />
            <ScoreBox score="500" />
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
    backgroundColor: "#071CFF",
  },
  column:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  }
});

