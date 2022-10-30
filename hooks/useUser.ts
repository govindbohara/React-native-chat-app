import {useState, useEffect} from 'react'
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth'

const useUser = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)
  useEffect(() => {
    const unSubscribe = auth().onAuthStateChanged(setUser)
    return unSubscribe
  }, [])
  return user
}
export default useUser
