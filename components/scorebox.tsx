import React from 'react'
import { Text } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import {useFonts} from 'expo-font'
type ScoreBoxProps = {
    score: string;
    status :string;
}

export default function ScoreBox(props: ScoreBoxProps){
    const [fontsLoaded] = useFonts({
        'GyParody': require('../assets/fonts/gyparodyhv.ttf')
    })
    const boxStyle = props.status === 'new' ? styles.new : styles.wrong
  return (
      <Link href={`/detail/${props.score}`} style={[{borderWidth:1,borderColor:'black',borderStyle:'solid', padding:15, paddingVertical:30 },boxStyle]}>
            <Text>
                {props.score}
            </Text>
        </Link>
  );
}
const styles = StyleSheet.create({
    correct:{
        backgroundColor: 'green'
    },
    wrong:{
        backgroundColor: 'red'
    },
    new:{
        backgroundColor: 'white'
    }
})
