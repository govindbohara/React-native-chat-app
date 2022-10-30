import {View, Text, Button, Input} from 'native-base'
import {StyleSheet} from 'react-native'
import {Link} from '@react-navigation/native'
import {MessageInput} from '../src/components/messageInput/MessageInput'
import useMessages from '../hooks/message/useMessages'
import {MessageList} from '../src/components/messageList/MessageList'

const Home = () => {
  return (
    <>
      <View flex={1} px={3} my={3}>
        <MessageList />
        <MessageInput />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  LinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeadText: {
    // fontFamily: 'Poppins-Bold',
  },
  MessageContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
  },
})

export default Home
