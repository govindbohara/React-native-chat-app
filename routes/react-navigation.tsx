import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from '../screens/Home'
import Login from '../screens/Login'
import SignUp from '../screens/Signup'
import React from 'react'
import useUser from '../hooks/useUser'
import {BottomTab} from '../src/components/common/bottomTab'

type RootStackParamList = {
  Root: undefined
  Login: undefined
  Signup: undefined
}
export const ReactNavigationStack = () => {
  const user = useUser()
  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name="Root" component={BottomTab} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
