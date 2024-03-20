import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { supabase } from "../supabase";
import { Link } from "expo-router";
import { Pressable, View, Text } from "react-native";
import { Session } from "@supabase/supabase-js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { Button } from "react-native";
import { useRouter } from "expo-router";
const Stack = createNativeStackNavigator();
function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>JeopReady</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.entryButton}>
          <Button
            onPress={() => router.navigate("/login")}
            title="LOGIN"
            color="white"
          ></Button>
        </View>
        <View style={styles.entryButton}>
          <Button
            onPress={() => router.navigate("/score")}
            title="NEW GAME"
            color="white"
          ></Button>
        </View>
      </View>
    </View>
  );
}
export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    color: "#204BA4",
  },
  header: {
    flex: 3,
    justifyContent: "center",
  },
  entryButton: {
    backgroundColor: "#204BA4",
    borderColor: "black",
    borderRadius: 25,
    color: "white",
    width: 300,
    height: 45,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttons: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
});
