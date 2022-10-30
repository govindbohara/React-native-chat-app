import {NativeBaseProvider} from 'native-base'
import React from 'react'
import {StatusBar} from 'react-native'
import {ReactNavigationStack} from './routes/react-navigation'
import {nativeBaseTheme} from './theme/native-base-theme'

// extend the theme

export default function App() {
  return (
    <>
      <StatusBar />
      <NativeBaseProvider theme={nativeBaseTheme}>
        <ReactNavigationStack />
      </NativeBaseProvider>
    </>
  )
}
