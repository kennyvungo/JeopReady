import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { supabase } from "../supabase";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";
import { Session } from "@supabase/supabase-js";

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
    <View style={{flex:1, backgroundColor:'pink'}}>
      <Link href="/login"> LOGIN</Link>
      <Link href="/score"> NEW GAME</Link>
    </View>
    </SafeAreaProvider>
  );
}
