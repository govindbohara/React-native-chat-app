import firestore from '@react-native-firebase/firestore'
import {AddMessage} from '../../type/addMessage'
const useAddMessage = () => {
  const addMessage = async (messagePayload: AddMessage) => {
    firestore()
      .collection('messages')
      .add(messagePayload)
      .then(() => {
        console.log('added')
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return addMessage
}

export default useAddMessage
