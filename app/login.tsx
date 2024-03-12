import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { supabase } from "../supabase";
import Auth from "../components/auth";
import Account from "../components/account";
import { View } from "react-native";
import { Session } from "@supabase/supabase-js";
import { Link } from "expo-router";
import { Text } from "react-native-elements";
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
      <View>
        {session && session.user ? (
          <Account key={session.user.id} session={session} />
        ) : (
          <Auth />
        )}
        <Text>
        <Link href="/">Back to Home</Link>
        </Text>
      </View>
    </SafeAreaProvider>
  );
}
