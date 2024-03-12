import React from 'react'
import { Text } from 'react-native-elements'
import { View } from 'react-native'
import { Pressable } from 'react-native'
import { Link } from 'expo-router'
import {useFonts} from 'expo-font'
type ScoreBoxProps = {
    score: string;
}

export default function ScoreBox(score: ScoreBoxProps){
    const [fontsLoaded] = useFonts({
        'GyParody': require('../assets/fonts/gyparodyhv.ttf')
    })
  return (
        <Link href={`/detail/${score.score}`} style={{borderWidth:1,borderColor:'black',borderStyle:'solid', padding:15, paddingVertical:30}}>
            <Text style={{ fontFamily: "GyParody", fontSize: 17, color: "#DCAB71"}}>
                {score.score}
            </Text>
        </Link>
  );
}
