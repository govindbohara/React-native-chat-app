import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../../../screens/Home'
import Settings from '../../../screens/settings'
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import FeatherIcons from 'react-native-vector-icons/Feather'
import {AddFreind} from '../../../screens/Add-Friend'

const Tab = createBottomTabNavigator()
export const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <AntDesignIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="addFriend"
        component={AddFreind}
        options={{
          tabBarIcon: ({size, color}) => (
            <AntDesignIcons name="adduser" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({size, color}) => (
            <FeatherIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
