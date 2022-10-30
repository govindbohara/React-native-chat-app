import {formatDistanceToNow} from 'date-fns'
import {Box, FlatList, Text, View, VStack} from 'native-base'
import useMessages from '../../../hooks/message/useMessages'
import useUser from '../../../hooks/useUser'
import {Message} from '../../../type/message'
import {useWindowDimensions} from 'react-native'

export const MessageList = () => {
  const {messages} = useMessages()
  const user = useUser()
  console.log(user?.email)

  const {width} = useWindowDimensions()

  const isUserMessage = (message: Message) => {
    return message.userId === user?.uid
  }

  return (
    <>
      <FlatList
        data={messages}
        keyExtractor={item => item.createdDate}
        renderItem={({item}) => {
          const formattedCreatedAt = formatDistanceToNow(
            new Date(item?.createdDate),
            {
              addSuffix: true,
            },
          )
          const email = item?.email
          const index = email?.indexOf('@')
          const name = email?.slice(0, index)
          return (
            <Box
              mb={4}
              alignItems={isUserMessage(item) ? 'flex-end' : 'flex-start'}
              justifyContent={isUserMessage(item) ? 'flex-end' : 'flex-start'}>
              {isUserMessage(item) ? (
                <>
                  <VStack
                    rounded={'2xl'}
                    px={8}
                    borderColor="#ccc"
                    borderTopLeftRadius="2xl"
                    alignItems={'flex-end'}
                    py={2}
                    backgroundColor="#351a96"
                    justifyContent={'flex-end'}
                    maxWidth={width * 0.8}>
                    <Text fontSize={14} fontWeight={600} color="#fff" mb={1}>
                      {name}
                    </Text>
                    <Text fontSize={14} color="#fff">
                      {item.message}
                    </Text>
                    <Text fontSize={12} color="#fff">
                      {formattedCreatedAt}
                    </Text>
                  </VStack>
                </>
              ) : (
                <>
                  <VStack
                    rounded={'2xl'}
                    px={4}
                    py={2}
                    maxWidth={width * 0.8}
                    backgroundColor="gray.200"
                    borderTopRightRadius="2xl">
                    <Text fontSize={14} fontWeight={600} mb={1}>
                      {name}
                    </Text>
                    <Text fontSize={14}>{item.message}</Text>
                    <Text fontSize={10}>{formattedCreatedAt}</Text>
                  </VStack>
                </>
              )}
              {/* <Text color={isUserMessage(item) ? 'red.500' : 'blue.500'}>
              {item.message}
            </Text> */}
            </Box>
          )
        }}
      />
    </>
  )
}
