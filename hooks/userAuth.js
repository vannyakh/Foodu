import { View, Text } from 'react-native'
import React ,{useEffect,useState}from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../configs/firebase'

export default function UserAuth() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        });

    }, [])

  return { user }
}