import auth from '@react-native-firebase/auth'
import {useState} from 'react'

const useFirebaseLogin = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const login = (
    email: string,
    password: string,
    onSuccess: (message: string) => void,
  ) => {
    setLoading(true)
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        onSuccess('User signed in!')
        console.log(response)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }
  return {login, loading, error}
}

export default useFirebaseLogin
