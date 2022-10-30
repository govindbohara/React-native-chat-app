import {Button, Text} from 'native-base'
import auth from '@react-native-firebase/auth'

const Settings = () => {
  return (
    <>
      <Text>Setting page</Text>
      <Button onPress={() => auth().signOut()}>Logout</Button>
    </>
  )
}
export default Settings
