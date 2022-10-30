import fireStore from '@react-native-firebase/firestore'
import {compareAsc} from 'date-fns'
import {useEffect, useState} from 'react'
import {Message} from '../../type/message'
const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const sortMessages = (sortMessage: Message[]) => {
    return sortMessage.sort((a, b) =>
      compareAsc(new Date(a.createdDate), new Date(b.createdDate)),
    )
  }
  //getting all the collection
  useEffect(() => {
    const fetchMessages = async () => {
      const collection = await fireStore().collection<Message>('messages').get()
      const data = collection.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id,
        }
      })
      const sortedMessages = sortMessages(data)
      setMessages(sortedMessages)
    }
    fetchMessages()
  }, [])

  //getting all the real time changes

  useEffect(() => {
    const subscriber = fireStore()
      .collection<Message>('messages')
      .onSnapshot(snap => {
        const message = snap.docs.map(mess => {
          return {
            ...mess.data(),
            id: mess.id,
          }
        })
        const sortedMessages = sortMessages(message)
        setMessages(sortedMessages)
      })
    return () => subscriber()
  }, [])
  return {messages}
}

export default useMessages
