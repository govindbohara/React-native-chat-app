import {Input, Pressable} from 'native-base'
import {useState} from 'react'
import FeatherIcons from 'react-native-vector-icons/Feather'
import useAddMessage from '../../../hooks/message/useAddMessage'
import useUser from '../../../hooks/useUser'
import {Keyboard} from 'react-native'

export const MessageInput = () => {
  const [messagetext, setMessageText] = useState<string>('')
  const addMessage = useAddMessage()
  const user = useUser()

  const submitMessage = () => {
    if (!user) {
      return
    }
    const messagePayload = {
      createdDate: new Date().toString(),
      userId: user?.uid,
      message: messagetext,
      email: user?.email,
    }
    if (user?.email) {
      addMessage(messagePayload)
      Keyboard.dismiss()
      setMessageText('')
    }
  }
  return (
    <Input
      placeholder="Send your message"
      value={messagetext}
      onChangeText={text => {
        setMessageText(text)
      }}
      rightElement={
        <Pressable onPress={submitMessage} marginRight={3}>
          <FeatherIcons name="send" size={25} color={'#000'} />
        </Pressable>
      }
    />
  )
}
