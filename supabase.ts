import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://epogpurkvwoarezcflwf.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwb2dwdXJrdndvYXJlemNmbHdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyMTg3MzQsImV4cCI6MjAyNTc5NDczNH0.FpR5KSZZwY2CslGoQOBQtHOOB30v_vCsJuvvyWW75RU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
