import auth from '@react-native-firebase/auth'
import {useEffect, useState} from 'react'

export const useFirebaseSignUp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const signUp = (
    email: string,
    password: string,
    onSuccess: (message: string) => void,
  ) => {
    setLoading(true)
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        onSuccess('User account created & signed in!')
        console.log(response)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }
  return {signUp, loading, error}
}
