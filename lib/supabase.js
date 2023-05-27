import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'
import * as SecureStore from 'expo-secure-store'

const ExpoSecureStoreAdapter = {
    getItem: key => {
      return SecureStore.getItemAsync(key)
    },
    setItem: (key, value) => {
      SecureStore.setItemAsync(key, value)
    },
    removeItem: key => {
      SecureStore.deleteItemAsync(key)
    }
  }
  
  const supabaseUrl = 'https://wnzhjbbhzllhdtnyjypp.supabase.co'
  const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduemhqYmJoemxsaGR0bnlqeXBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwMjc2NjIsImV4cCI6MjAwMDYwMzY2Mn0.sO-97Wpmm3Ew3IgeapKFclbIzNrciE8Q1ikBFFSH8aE'
  const apiUrl = `${supabaseUrl}/rest/v1`; // Update 'rest/v1' based on your Supabase API version
  
  export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      storage: ExpoSecureStoreAdapter,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false
    }
  })
  